import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of news when the component mounts
    fetchNews();
  }, []);

  const state = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.userData?.isAdmin) {
      navigate("/auth/AdminLogin");
    }
  }, [state]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://simsun-backend.onrender.com/news"
      );
      setNewsList(response.data);
    } catch (error) {
      console.error("Error fetching news:", error.message);
      setError("Error fetching news. Please try again later.");
    }
  };

  const handleDeleteNews = async (newsId) => {
    if (window.confirm("Are you sure you want to delete this news?")) {
      try {
        await axios.delete(
          `https://simsun-backend.onrender.com/news/${newsId}`
        );
        // Refresh the news list after deletion
        fetchNews();
      } catch (error) {
        console.error("Error deleting news:", error.message);
        setError("Error deleting news. Please try again later.");
      }
    }
  };

  return (
    <div className="md:mt-24 container mx-auto p-4 pt-28 md:pt-4">
      <div className="flex justify-center">
        <h1 className=" text-3xl font-semibold mb-4">News List</h1>
      </div>

      {newsList.loading && <p>Loading...</p>}
      {newsList.error && <p>Error: {newsList.error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border  border-gray-300">
          <thead className="">
            <tr className=" hidden md:grid border-b md:grid-cols-3 items-center md:gap-24">
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((news) => (
              <tr
                key={news._id}
                className="flex flex-col justify-center md:grid border-b md:grid-cols-3 md:gap-24"
              >
                <div className="flex justify-center">
                  <td className="py-2 px-4 font-bold">{news.title}</td>
                </div>
                <div className="flex justify-center">
                  <td className="py-2 px-4 ">{news.description}</td>
                </div>
                <div className="flex justify-center">
                  <td className="py-2 px-4 ">
                    <div className="flex items-center border-b md:border-none">
                      <Link
                        to={`/admin/newsedit/${news._id}`}
                        className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeleteNews(news._id)}
                        className="bg-red-500 text-white py-1 px-2  rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsList;
