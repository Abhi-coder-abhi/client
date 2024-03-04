import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminInquiry = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [enquiryByDetails, setEnquiryByDetails] = useState(null);
  const [enquiryBy, setEnquiryBy] = useState(null);
  const userId = useSelector((state) => state.user.userData._id);
  const modalRef = useRef(null);

  useEffect(() => {
    fetchInquiries();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userId]);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get(
        `https://simsun-backend.onrender.com/api/enquiry/allInquiry/${userId}`
        // `http://localhost:5000/api/enquiry/allInquiry/${userId}`
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch inquiries");
      }
      // console.log("Prev : ", response.data.previousInquiries);
      console.log("Enquiryby : ", response.data.EnquiryBy);
      setEnquiryBy(response.data.EnquiryBy);
      setInquiries(response.data.previousInquiries);
      //   console.log(inquiries);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const openDetailsModal = (inquiry) => {
    setSelectedInquiry(inquiry);
    // console.log(inquiry.userId);
    setEnquiryByDetails(inquiry.userId);
  };

  const closeDetailsModal = () => {
    setSelectedInquiry(null);
    setEnquiryByDetails(null);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeDetailsModal();
    }
  };

  return (
    <div className="container mx-auto md:mt-32 justify-center pt-28 md:pt-4 min-h-[45vh]">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center mb-2">
          <h2 className="text-2xl font-bold">Customer Enquiry</h2>
        </div>
        <ul className="list-disc">
          {inquiries
            .slice(0)
            .reverse()
            .map((inquiry) => (
              <li
                key={inquiry._id}
                className="user-item flex justify-between items-center p-4 border bg-white hover:bg-gray-100 transition duration-300"
              >
                <div className="user-info grid grid-rows-2">
                  <div>
                    <strong>Name:</strong> {inquiry.name}
                  </div>
                  <div>
                    <strong>Email:</strong> {inquiry.email}
                  </div>
                  <div>
                    <strong>Phone:</strong> {inquiry.phone}
                  </div>
                  <div>
                    <strong>Time:</strong>{" "}
                    {new Date(inquiry.createdAt).toLocaleString()}
                  </div>
                </div>
                <button
                  className="details-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  onClick={() => openDetailsModal(inquiry)}
                >
                  See Details
                </button>
              </li>
            ))}
        </ul>
      </div>

      {selectedInquiry && (
        <div className=" z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div
            ref={modalRef}
            className="inquiry-details-modal bg-white p-8 rounded shadow-lg w-96 overflow-y-auto max-h-full"
          >
            <h2 className="text-2xl font-bold mb-2">Enquiry by:</h2>
            {Array.isArray(enquiryBy) &&
              enquiryBy.map(
                (inquiryby) =>
                  inquiryby.userId == enquiryByDetails && (
                    <div
                      key={inquiryby._id}
                      className="user-info grid grid-rows-2"
                    >
                      <div>
                        <strong>Name:</strong> {inquiryby.name}
                      </div>
                      <div>
                        <strong>Email:</strong> {inquiryby.email}
                      </div>
                      <div>
                        <strong>Phone:</strong> {inquiryby.phone}
                      </div>
                    </div>
                  )
              )}
            <br />
            <h2 className="text-2xl font-bold mb-2">Enquiry Details:</h2>
            <div className="mb-2">
              <strong>Name:</strong> {selectedInquiry.name}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {selectedInquiry.email}
            </div>
            <div className="mb-2">
              <strong>Phone:</strong> {selectedInquiry.phone}
            </div>
            <div className="mb-2">
              <strong>Enquiry:</strong> {selectedInquiry.EnquiryDetails}
            </div>
            <div className="mb-4">
              <strong>Products:</strong>
              <ul className="list-disc pl-8">
                {selectedInquiry.items.map((item, index) => (
                  <li key={index}>
                    <div className="font-semibold">{item.name}</div>
                    <div>Price: {item.price}</div>
                    <div>Quantity: {item.quantity}</div>
                    {/* Add additional product details here */}
                  </li>
                ))}
              </ul>
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
    </div>
  );
};

export default AdminInquiry;
