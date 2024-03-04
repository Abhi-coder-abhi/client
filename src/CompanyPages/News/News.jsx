import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://simsun-backend.onrender.com/news"
        );
        const totalNewsCount = response.data.length;

        setTotalPages(Math.floor(totalNewsCount / itemsPerPage) + 1);
        const sortedNews = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setNews(sortedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:5000/news?limit=${itemsPerPage}&page=${currentPage}`
          `https://simsun-backend.onrender.com/news?limit=${itemsPerPage}&page=${currentPage}`
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [currentPage]);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://simsun-backend.onrender.com/news?limit=${itemsPerPage}&page=${currentPage}`
  //       );
  //       setNews(response.data);
  //     } catch (error) {
  //       console.error("Error fetching news:", error);
  //     }
  //   };

  //   fetchNews();
  // }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-8 md:mt-20 pt-28 md:pt-4">
      <div className=" max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Latest News</h1>
        <div className="grid gap-8">
          {news.map((item) => (
            <div
              key={item._id}
              className="rounded overflow-hidden shadow-lg bg-white p-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h2 className="font-bold text-xl mb-2">{item.title}</h2>
              <p className="text-gray-700 text-base">{item.description}</p>
              <p className="text-gray-500 text-sm mt-2">
                Date: {new Date(item.date).toLocaleDateString()} | Time:{" "}
                {new Date(item.date).toLocaleTimeString([], { hour12: true })}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`bg-blue-500 text-white py-2 px-4 rounded mr-2 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous Page
          </button>
          <p className="text-black mr-2">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`bg-blue-500 text-white py-2 px-4 rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
