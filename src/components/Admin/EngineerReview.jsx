// AdminReviewPage.js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const acceptEngineerRequest = async (engineerId) => {
  await axios.post(
    "https://simsun-backend.onrender.com/api/acceptEngineerRequest",
    {
      engineerId,
    }
  );

  // TODO: Add logic to send an email to the engineer about approval
  // Example: await sendApprovalEmail(engineerId);
};

const rejectEngineerRequest = async (engineerId) => {
  await axios.post(
    "https://simsun-backend.onrender.com/api/rejectEngineerRequest",
    {
      engineerId,
    }
  );

  // TODO: Add logic to send an email to the engineer about rejection
  // Example: await sendRejectionEmail(engineerId);
};

const fetchEngineers = async () => {
  const { data } = await axios.get(
    "https://simsun-backend.onrender.com/api/getUsers"
  );
  return data.engineers;
};

const AdminReviewPage = () => {
  const [engineers, setEngineers] = useState([]);
  const [selectedEngineer, setSelectedEngineer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const state = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.userData?.isAdmin) {
      console.log("Redirecting to /auth/AdminLogin");
      navigate("/auth/AdminLogin");
    }
  }, [state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const engineersData = await fetchEngineers();
        // Filter out engineers with isEngineer === true
        const pendingEngineers = engineersData.filter(
          (engineer) => !engineer.isEngineer
        );
        setEngineers(pendingEngineers);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const openDetailsModal = (engineer) => {
    setSelectedEngineer(engineer);
  };

  const closeDetailsModal = () => {
    setSelectedEngineer(null);
  };

  const handleApprove = async (engineerId) => {
    await acceptEngineerRequest(engineerId);
    const updatedEngineers = engineers.filter((e) => e._id !== engineerId);
    setEngineers(updatedEngineers);
  };

  const handleReject = async (engineerId) => {
    await rejectEngineerRequest(engineerId);
    // Add logic to send an email to the engineer about rejection
    // Example: sendRejectionEmail(engineerId);

    // Update the state or refetch the data if needed
    const updatedEngineers = engineers.filter((e) => e._id !== engineerId);
    setEngineers(updatedEngineers);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading engineers</p>;

  return (
    <>
      <div className="container mx-auto md:mt-32 pt-28 md:pt-4">
        <div className="flex justify-center">
          <h1 className=" text-xl md:text-2xl font-bold mb-4">
            Engineer Registration Requests
          </h1>
        </div>
        <ul className="flex flex-col justify-around mx-10 ">
          {engineers.map((engineer) => (
            <li
              key={engineer._id}
              className="mb-4 rounded-md flex flex-col lg:grid lg:grid-cols-4 items-center p-5 lg:pl-44 border bg-white hover:bg-gray-100 transition duration-300"
            >
              <p>Name: {engineer.fullName}</p>
              <p>Email: {engineer.email}</p>
              {/* Add more details as needed */}
              <div className="flex m-2 ">
                <button
                  className="bg-green-500 text-white w-fit text-xs sm:text-lg flex py-2 px-4 rounded-md mr-2"
                  onClick={() => handleApprove(engineer._id)}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white w-fit text-xs sm:text-lg flex py-2 px-4 rounded-md"
                  onClick={() => handleReject(engineer._id)}
                >
                  Reject
                </button>
              </div>
              <button
                className="details-button bg-blue-500 w-fit text-xs sm:text-lg text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                onClick={() => openDetailsModal(engineer)}
              >
                See Details
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedEngineer && (
        <div className=" z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="inquiry-details-modal bg-white p-8 rounded shadow-lg w-96 overflow-y-auto max-h-full">
            <h2 className="text-2xl font-bold mb-4">Engineer Details</h2>
            <div className="mb-4">
              <strong>Name:</strong> {selectedEngineer.fullName}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {selectedEngineer.email}
            </div>
            <div className="mb-4">
              <strong>UserName:</strong> {selectedEngineer.userName}
            </div>
            <div className="mb-4">
              <strong>Phone Number:</strong> {selectedEngineer.phoneNumber}
            </div>
            <div className="mb-4">
              <strong>Experience:</strong> {selectedEngineer.experience}
            </div>
            <div className="mb-4">
              <strong>Field:</strong> {selectedEngineer.field}
            </div>
            <div className="mb-4">
              <strong>Certificate:</strong> {selectedEngineer.certificates}
            </div>
            <div className="mb-4">
              <strong>WhatsApp Number:</strong>{" "}
              {selectedEngineer.whatsappNumber}
            </div>
            <div className="mb-4">
              <strong>Location:</strong> {selectedEngineer.location}
            </div>
            <div className="mb-4">
              <strong>State:</strong> {selectedEngineer.state}
            </div>
            <div className="mb-4">
              <strong>City:</strong> {selectedEngineer.city}
            </div>
            <div className="mb-4">
              <strong>Address:</strong> {selectedEngineer.address}
            </div>
            <div className="mb-4">
              <strong>Pin Code:</strong> {selectedEngineer.pinCode}
            </div>
            <div className="mb-4">
              <strong>Description:</strong> {selectedEngineer.description}
            </div>
            <button
              className="close-modal bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
              onClick={closeDetailsModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminReviewPage;
