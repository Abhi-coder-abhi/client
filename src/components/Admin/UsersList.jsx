import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [emailQuery, setEmailQuery] = useState("");
  const [nameQuery, setNameQuery] = useState("");
  const state = useSelector((state) => state.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.userData?.isAdmin) {
      console.log("Redirecting to /auth/AdminLogin");
      navigate("/auth/AdminLogin");
    }
  }, [state]);

  useEffect(() => {
    // Fetch user data from the backend
    axios
      .get("https://simsun-backend.onrender.com/api/getUsers")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const openDetailsModal = (user) => {
    setSelectedUser(user);
  };

  const closeDetailsModal = () => {
    setSelectedUser(null);
  };

  const filteredUsers = users.consumers
    ? users.consumers.filter((user) => {
        const nameMatch =
          !nameQuery ||
          (user.fullName &&
            user.fullName.toLowerCase().includes(nameQuery.toLowerCase()));
        const emailMatch =
          !emailQuery ||
          (user.email &&
            user.email.toLowerCase().includes(emailQuery.toLowerCase()));
        return nameMatch && emailMatch;
      })
    : [];

  return (
    <div className="container mx-auto  md:mt-32 justify-center pt-28 md:pt-4">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center mb-2">
          <h2 className=" text-2xl font-bold ">Customer Users</h2>
        </div>
        {/* Search input fields */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between mb-4 mx-4">
          <input
            type="text"
            placeholder="Search by Name"
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
            className="p-2 border rounded mb-2 md:mb-0 md:mr-2"
          />
          <input
            type="text"
            placeholder="Search by email"
            value={emailQuery}
            onChange={(e) => setEmailQuery(e.target.value)}
            className="p-2 border rounded mb-2 md:mb-0 md:mr-2"
          />
        </div>
        <ul>
          {
            // users.consumers &&
            // users.consumers.map((user) => (
            filteredUsers.map((user) => (
              <li
                key={user._id}
                className="user-item flex justify-between items-center p-4 border bg-white hover:bg-gray-100 transition duration-300"
              >
                <div className="user-info grid grid-rows-2 ">
                  <div>
                    <strong>Name:</strong> {user.fullName}
                  </div>
                  <div>
                    <strong>Email:</strong> {user.email}
                  </div>
                </div>
                <button
                  className="details-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  onClick={() => openDetailsModal(user)}
                >
                  See Details
                </button>
              </li>
            ))
          }
        </ul>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="user-details-modal bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
            <div className="mb-4">
              <strong>Name:</strong> {selectedUser.fullName}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {selectedUser.email}
            </div>
            <div className="mb-4">
              <strong>UserName:</strong> {selectedUser.userName}
            </div>

            {/* Add other user details here */}
            <button
              className="close-modal bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
              onClick={closeDetailsModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;
