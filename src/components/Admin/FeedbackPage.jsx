// FeedbackPage.js
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const state = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.userData?.isAdmin) {
      navigate("/auth/AdminLogin");
    }
  }, [state]);

  useEffect(() => {
    // Fetch feedbacks from the server
    axios
      .get("https://simsun-backend.onrender.com/api/feedbacks")
      .then((response) => {
        setFeedbacks(response.data);
      });
  }, []);

  const handleDeleteFeedback = (id) => {
    // Send a request to delete feedback by id
    axios
      .delete(`https://simsun-backend.onrender.com/api/feedbacks/${id}`)
      .then((response) => {
        // Update the feedbacks state after successful deletion
        setFeedbacks((prevFeedbacks) =>
          prevFeedbacks.filter((feedback) => feedback._id !== id)
        );
      });
  };

  return (
    <div className="md:mt-20 container mx-auto p-8 bg-gray-100 rounded shadow-lg pt-28 md:pt-4">
      <h1 className="text-2xl font-bold mb-6">Admin Feedback Page</h1>
      {feedbacks.map((feedback) => (
        <div key={feedback._id} className="bg-white p-6 mb-4 rounded shadow-md">
          <p className="text-base mb-4">{feedback.feedbackText}</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => handleDeleteFeedback(feedback._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeedbackPage;
