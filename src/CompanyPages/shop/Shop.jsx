import React, { useEffect, useReducer, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/slices/CartSlices";
import { useNavigate } from "react-router-dom";
import products from "../Product/product";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useDispatchCart, useCart } from "../../store/contextReducer";
import Spinner from "./Spinner";
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

const Shop = () => {
  const dispatch = useDispatch();
  const [state, dispatchProducts] = useReducer(productsReducer, initialState);
  const navigate = useNavigate();
  const [heading, setHeading] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

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

  // console.log("hehehe", customer.userData.fullName);

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
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handlePageChange = (page) => {
    dispatchProducts({ type: "SET_CURRENT_PAGE", payload: page });
  };

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    dispatchProducts({ type: "SET_SEARCH_QUERY", payload: searchQuery });
    if (event.key === "Enter" || event.type === "click") {
      const searchQuery = event.target.value;
      dispatchProducts({ type: "SET_SEARCH_QUERY", payload: searchQuery });
    }
  };

  const filteredProducts = state.products.filter((product) =>
    product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  const handleEnquiry = (product) => {
    const mailto = `mailto:simsunelectricwork@gmail.com?subject=Product Enquiry - ${product.name}&body=Product Name: ${product.name}%0D%0ACategory: ${product.category}%0D%0ADescription: ${product.description}%0D%0AWrite Your Enquiry Here: `;
    window.location.href = mailto;
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        setSubOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <div className="mt-0 md:mt-12 min-h-screen w-full bg-gray-100 p-4 pt-28 md:pt-4">
      <div className="pt-10 flex w-full items-center gap-24 lg:justify-center mb-4 relative">
        <div className="text-3xl md:hidden z-0 " onClick={() => setOpen(!open)}>
          {open ? (
            ""
          ) : (
            <div className="flex flex-row gap-3 items-center cursor-pointer text-[1rem] z-[-10] font-semibold">
              <IoMdMenu className="z-20 text-3xl font-semibold " />
              Show Categories
            </div>
          )}
        </div>
        <h1 className="text-3xl hidden lg:block font-semibold text-center mb-8 mt-2 justify-self-center">
          Shop
        </h1>
      </div>
      <div className="mb-4">
        {/* <input
          type="text"
          placeholder="Search products..."
          className="p-2 border border-gray-300 rounded w-full"
          value={state.searchQuery}
          onChange={handleSearch}
        /> */}
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 border border-gray-300 rounded w-full"
          value={state.searchQuery}
          onChange={handleSearch}
          onKeyPress={handleSearch}
        />
      </div>
      {state.loading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {state.error && <p>Error: {state.error}</p>}

      <div className="flex w-full gap-4 lg:gap-10 ">
        <div
          ref={menuRef}
          className={` z-50 md:z-0 w-1/2 md:w-1/3  fixed md:relative lg:flex top-0 md:top-0 overflow-y-auto flex-col h-full  bg-white min-h-screen  duration-500 ${
            open ? "left-0" : "left-[-100%] md:left-0"
          }`}
        >
          <h2 className="flex flex-row items-center justify-between text-md lg:text-xl font-semibold px-2 py-4 lg:p-5">
            Product groups
            {open && (
              <RxCross2
                onClick={handleCloseSidebar}
                className="text-2xl md:hidden "
              />
            )}
          </h2>
          <hr className="w-full" />
          <ul className="flex flex-col gap-5 font-semibold p-2 lg:p-5 ">
            {products.map((myproduct, index) => (
              <Link key={index} to={myproduct.link} className="w-full">
                <h2
                  className="flex justify-between items-center md:pr-0 pr-5 group hover:bg-gray-200 px-2 py-2 text-sm lg:text-md bg-white w-full"
                  onClick={() => {
                    setHeading((prevHeading) =>
                      prevHeading === myproduct.name ? "" : myproduct.name
                    );
                    if (!myproduct.subMenu) {
                      setOpen(!open);
                      setCategory(myproduct.name);
                      window.scrollTo(0, 20);
                    }
                    setSubOpen((prev) =>
                      prev === myproduct.name ? "" : myproduct.name
                    );
                  }}
                >
                  {myproduct.name}
                  {myproduct.subMenu && (
                    <div>
                      <div>
                        <span className="text-md lg:text-xl md:hidden inline">
                          {heading === myproduct.name ? (
                            <FaAngleLeft />
                          ) : (
                            <FaAngleRight />
                          )}
                        </span>
                        <span
                          className={`text-md lg:text-xl md:mt-1 md:ml-1 hidden md:block  ${
                            subOpen === myproduct.name
                              ? "rotate-180 "
                              : "hidden"
                          }`}
                        >
                          <FaAngleRight />
                        </span>
                      </div>

                      <div
                        className={`absolute min-[1400px]:left-10 left-3 min-[1400px]:w-1/2 w-[15%] lg:w-[30%] lg:top-15 z-30 duration-500  ${
                          subOpen === myproduct.name ? "block " : "top-[-100%]"
                        }`}
                      >
                        <div className="py-0">
                          <div className="w-4 h-4 left-3 absolute mt-1 rotate-45"></div>
                        </div>
                        <div className="bg-white text-black p-1 lg:p-4 flex flex-col gap-4 border-2 border-black/40 rounded-sm -mr-20 items-center">
                          {myproduct.subCategories.map((subcategory) => (
                            <li
                              key={subcategory.id}
                              className="hover:bg-gray-200 w-full py-1 lg:py-2 lg:px-2 px-[0.1rem] lg:pl-2"
                              onClick={() => {
                                setCategory(subcategory.name);
                                setOpen(!open);
                                window.scrollTo(0, 0);
                              }}
                            >
                              {subcategory.name}
                            </li>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </h2>
              </Link>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-fit">
          {filteredProducts.map((product) => (
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
                    {[...Array(5 - Math.ceil(product.rating))].map(
                      (_, index) => (
                        <i key={`empty-${index}`} className="fa fa-star-o" />
                      )
                    )}
                  </div>
                ) : null}
                <p className="text-green-800 font-semibold">₹{product.price}</p>
                <button
                  className="block w-full  text-white py-2 mt-2 font-[Poppins] rounded bg-red-500 hover:bg-red-600 transition duration-300"
                  onClick={() => handleEnquiry(product)}
                >
                  Enquire Now
                </button>
                <button
                  className="block w-full bg-black text-white py-2 mt-4 rounded hover:bg-gray-800 transition duration-300"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center mx-2">
        {[...Array(state.totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`sm:mx-2 mx-[0.15rem] px-2 py-1 text-sm sm:text-md md:px-4 md:py-2 rounded ${
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

export default Shop;
