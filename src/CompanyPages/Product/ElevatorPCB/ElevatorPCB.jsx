// LiftProducts.js

import React, { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../../store/slices/CartSlices";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const productsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload.products.filter(
          (product) => product.category === "BLT Elevator PCB"
        ),
        totalPages: action.payload.totalPages,
        error: null,
        loading: false,
      };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const initialState = {
  products: [],
  loading: true,
  error: null,
  totalPages: 1,
  currentPage: 1,
};

const LiftProducts = () => {
  const dispatch = useDispatch();
  const [state, dispatchProducts] = useReducer(productsReducer, initialState);
  const navigate = useNavigate();
  const category = "BLT Elevator PCB";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://simsun-backend.onrender.com/api/products?category=${encodeURIComponent(
            category
          )}&limit=all`
        );
        dispatchProducts({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatchProducts({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, [state.currentPage, state.searchQuery]);

  const customer = useSelector((customer) => customer.user);

  const handleAddToCart = (product) => {
    if (!customer?.isAuthenticated) {
      navigate("/auth/consumerLogin");
    } else {
      dispatch(
        addItem({
          id: product._id,
          name: product.name,
          price: product.price,
        })
      );
    }
  };

  const handlePageChange = (page) => {
    dispatchProducts({ type: "SET_CURRENT_PAGE", payload: page });
  };

  const handleEnquiry = (product) => {
    const mailto = `mailto:sales@example.com?subject=Product Enquiry - ${product.name}&body=Product Name: ${product.name}%0D%0ACategory: ${product.category}%0D%0ADescription: ${product.description}%0D%0AWrite Your Enquiry Here: `;
    window.location.href = mailto;
  };

  return (
    <div className="mt-24 md:mt-24  min-h-screen bg-gray-100 p-4 pt-32 md:pt-4">
      <h1 className="text-3xl font-semibold text-center mb-8">
        BLT Elevator PCB
      </h1>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {state.products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover object-center transition-transform transform-gpu hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              {product.rating ? (
                <div className="flex items-center mb-2 text-yellow-500">
                  {[...Array(Math.floor(product.rating))].map((_, index) => (
                    <i key={index} className="fa fa-star" />
                  ))}
                  {product.rating % 1 !== 0 && (
                    <i key="half" className="fa fa-star-half-alt" />
                  )}
                  {[...Array(5 - Math.ceil(product.rating))].map((_, index) => (
                    <i key={`empty-${index}`} className="fa fa-star-o" />
                  ))}
                </div>
              ) : null}

              <p className="text-green-800 font-semibold">₹{product.price}</p>
              <button
                className="block w-full bg-black text-white py-2 mt-4 rounded hover:bg-gray-800 transition duration-300"
                onClick={() => handleAddToCart(product)}
              >
                Add to Inquiry
              </button>
              <button
                className="block w-full  text-white py-2 mt-2 font-[Poppins] rounded bg-red-500 hover:bg-red-600 transition duration-300"
                onClick={() => handleEnquiry(product)}
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        {[...Array(state.totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-4 py-2 rounded ${
              state.currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LiftProducts;
