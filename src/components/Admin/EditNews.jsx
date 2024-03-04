import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://simsun-backend.onrender.com/news/${id}`
        );
        const existingNews = response.data;

        // Set the initial state with existing data
        setNews({
          title: existingNews.title,
          description: existingNews.description,
        });
      } catch (error) {
        console.error("Error fetching news:", error.message);
      }
    };

    fetchNews();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
  };

  const handleUpdateNews = async () => {
    try {
      await axios.put(`https://simsun-backend.onrender.com/news/${id}`, news);
      toast.success("News Updated Successfully");
      navigate("/admin/newsList");
    } catch (error) {
      console.error("Error updating news:", error.message);
    }
  };

  const state = useSelector((state) => state.user);
  useEffect(() => {
    if (!state?.userData?.isAdmin) {
      navigate("/auth/AdminLogin");
    }
  }, [state]);

  return (
    <div className="container mx-auto p-4 pt-28 md:pt-4">
      <h1 className="mt-16 text-3xl flex justify-center font-semibold mb-4">
        Edit News
      </h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-600">News Title</label>
          <input
            type="text"
            name="title"
            value={news.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Description</label>
          <textarea
            name="description"
            value={news.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          type="button"
          onClick={handleUpdateNews}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update News
        </button>
      </form>
    </div>
  );
};

export default EditNews;
