// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const UsersList = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [cityQuery, setCityQuery] = useState("");
//   const [stateQuery, setStateQuery] = useState("");
//   const state = useSelector((state) => state.user);

//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!state?.userData?.isAdmin) {
//       console.log("Redirecting to /auth/AdminLogin");
//       navigate("/auth/AdminLogin");
//     }
//   }, [state]);

//   useEffect(() => {
//     // Fetch user data from the backend
//     axios
//       .get("https://simsun-backend.onrender.com/api/getUsers")
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error("Error fetching user data:", error));
//   }, []);

//   const openDetailsModal = (user) => {
//     setSelectedUser(user);
//   };

//   const closeDetailsModal = () => {
//     setSelectedUser(null);
//   };

//   return (
//     <div className="container mx-auto  md:mt-32 justify-center pt-28 md:pt-4">
//       <div className="flex flex-col justify-center">
//         <div className="flex justify-center mb-2">
//           <h2 className=" text-2xl font-bold ">Engineer Details</h2>
//         </div>
//         {/* Search input fields */}
//         <div className="flex justify-between mb-4 mx-4">
//           <input
//             type="text"
//             placeholder="Search by State"
//             value={stateQuery}
//             onChange={(e) => setStateQuery(e.target.value)}
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             placeholder="Search by City"
//             value={cityQuery}
//             onChange={(e) => setCityQuery(e.target.value)}
//             className="p-2 border rounded"
//           />
//         </div>
//         <ul>
//           {users.engineers &&
//             users.engineers
//               .filter((user) => user.isEngineer)
//               .map((user) => (
//                 <li
//                   key={user._id}
//                   className="user-item flex justify-between items-center p-4 border bg-white hover:bg-gray-100 transition duration-300"
//                 >
//                   <div className="user-info">
//                     <strong>Name:</strong> {user.fullName}
//                     <br />
//                     <strong>Email:</strong> {user.email}
//                   </div>
//                   <button
//                     className="details-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
//                     onClick={() => openDetailsModal(user)}
//                   >
//                     See Details
//                   </button>
//                 </li>
//               ))}
//         </ul>
//       </div>

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [cityQuery, setCityQuery] = useState("");
  const [stateQuery, setStateQuery] = useState("");
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

  const filteredUsers = users.engineers
    ? users.engineers.filter((user) => {
        const nameMatch =
          !nameQuery ||
          (user.fullName &&
            user.fullName.toLowerCase().includes(nameQuery.toLowerCase()));
        const cityMatch =
          !cityQuery ||
          (user.city &&
            user.city.toLowerCase().includes(cityQuery.toLowerCase()));
        const stateMatch =
          !stateQuery ||
          (user.state &&
            user.state.toLowerCase().includes(stateQuery.toLowerCase()));
        // (user.state && user.state.toLowerCase() === stateQuery.toLowerCase());
        return user.isEngineer && nameMatch && cityMatch && stateMatch;
      })
    : [];

  return (
    <div className="container mx-auto  md:mt-32 justify-center pt-28 md:pt-4">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center mb-2">
          <h2 className=" text-2xl font-bold ">Engineer Details</h2>
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
            placeholder="Search by State"
            value={stateQuery}
            onChange={(e) => setStateQuery(e.target.value)}
            className="p-2 border rounded mb-2 md:mb-0 md:mr-2"
          />
          <input
            type="text"
            placeholder="Search by City"
            value={cityQuery}
            onChange={(e) => setCityQuery(e.target.value)}
            className="p-2 border rounded mb-2 md:mb-0"
          />
        </div>

        <ul>
          {filteredUsers.map((user) => (
            <li
              key={user._id}
              className="user-item flex justify-between items-center p-4 border bg-white hover:bg-gray-100 transition duration-300"
            >
              <div className="user-info">
                <strong>Name:</strong> {user.fullName}
                <br />
                <strong>Email:</strong> {user.email}
              </div>
              <button
                className="details-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                onClick={() => openDetailsModal(user)}
              >
                See Details
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* User Details Modal */}
      {selectedUser && (
        <div className=" z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="inquiry-details-modal bg-white p-8 rounded shadow-lg w-96 overflow-y-auto max-h-full">
            <h2 className="text-2xl font-bold mb-4">Engineer Details</h2>
            <div className="mb-4">
              <strong>Name:</strong> {selectedUser.fullName}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {selectedUser.email}
            </div>
            <div className="mb-4">
              <strong>UserName:</strong> {selectedUser.userName}
            </div>
            <div className="mb-4">
              <strong>Phone Number:</strong> {selectedUser.phoneNumber}
            </div>
            <div className="mb-4">
              <strong>Experience:</strong> {selectedUser.experience}
            </div>
            <div className="mb-4">
              <strong>Field:</strong> {selectedUser.field}
            </div>
            <div className="mb-4">
              <strong>Certificate:</strong> {selectedUser.certificates}
            </div>
            <div className="mb-4">
              <strong>WhatsApp Number:</strong> {selectedUser.whatsappNumber}
            </div>
            <div className="mb-4">
              <strong>Location:</strong> {selectedUser.location}
            </div>
            <div className="mb-4">
              <strong>State:</strong> {selectedUser.state}
            </div>
            <div className="mb-4">
              <strong>City:</strong> {selectedUser.city}
            </div>
            <div className="mb-4">
              <strong>Address:</strong> {selectedUser.address}
            </div>
            <div className="mb-4">
              <strong>Pin Code:</strong> {selectedUser.pinCode}
            </div>
            <div className="mb-4">
              <strong>Description:</strong> {selectedUser.description}
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
