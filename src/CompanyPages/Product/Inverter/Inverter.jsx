import React, { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../../store/slices/CartSlices";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Spinner from "../../shop/Spinner";
import { toast } from "react-toastify";

const productsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        products:
          action.payload.category === ""
            ? action.payload.data.products
            : action.payload.data.products.filter(
                (product) => product.category === action.payload.category
              ),
        totalPages: action.payload.data.totalPages,
        error: null,
        loading: false,
      };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
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
  searchQuery: "",
};

const LiftSpareParts = () => {
  const dispatch = useDispatch();
  const [state, dispatchProducts] = useReducer(productsReducer, initialState);
  const navigate = useNavigate();
  const category = "Elevator Inverter";

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://simsun-backend.onrender.com/api/products?limit=${
            // `http://localhost:5000/api/products?limit=${
            category === "" ? 24 : "all"
          }&page=${state.currentPage}`
        );

        dispatchProducts({
          type: "FETCH_SUCCESS",
          payload: { data: result.data, category: category },
        });
      } catch (error) {
        dispatchProducts({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, [state.currentPage, state.searchQuery, category]);

  const customer = useSelector((customer) => customer.user);

  const handleAddToCart = async (product) => {
    if (!customer?.isAuthenticated) {
      navigate("/auth/consumerLogin");
    } else {
      // console.log("check", product, customer.userData._id);

      try {
        const response = await axios.post(
          "https://simsun-backend.onrender.com/api/Cart/addItem",
          // "http://localhost:5000/api/Cart/addItem",
          {
            productId: product._id,
            productName: product.name,
            productPrice: product.price,
            productImg: product.imageUrl,
            userId: customer.userData._id,
            name: customer.userData.fullName,
            phone: customer.userData.phoneNumber,
            email: customer.userData.email,
            EnquiryDetails: "",
            address: customer.userData.address,
          }
        );
        toast.success("Added to cart");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handlePageChange = (page) => {
    dispatchProducts({ type: "SET_CURRENT_PAGE", payload: page });
  };

  const handleEnquiry = (product) => {
    const mailto = `mailto:simsunelectricwork@gmail.com?subject=Product Enquiry - ${product.name}&body=Product Name: ${product.name}%0D%0ACategory: ${product.category}%0D%0ADescription: ${product.description}%0D%0AWrite Your Enquiry Here: `;
    window.location.href = mailto;
  };

  return (
    <div className="mt-0 md:mt-16  min-h-screen bg-gray-100 p-4 pt-28 md:pt-4">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Elevator Inverter
      </h1>
      {state.loading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
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
                Add to Enquiry
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

export default LiftSpareParts;
