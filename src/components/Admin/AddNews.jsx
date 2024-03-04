import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const state = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.userData?.isAdmin) {
      console.log("Redirecting to /auth/AdminLogin");
      navigate("/auth/AdminLogin");
    }
  }, [state]);

  const handleSubmit = () => {
    axios
      .post("https://simsun-backend.onrender.com/news", { title, description })
      .then((response) => {
        console.log("News added:", response.data);
        // Show toast message
        toast.success("News added successfully");
        // Clear the form
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding news:", error);
        // Show error toast message
        toast.error("Error adding news");
      });
  };

  return (
    <div className="md:mt-16 flex justify-center items-center bg-blue-500 p-10 pt-28 md:pt-4">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-md shadow-md ">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add News</h2>
        <div className="mb-4">
          <label className="block text-gray-600">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Description</label>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Add News
        </button>
      </div>
    </div>
  );
};

export default NewsForm;
