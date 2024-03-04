import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../store/slices/UserSlice";
import NavLinks from "./NavLinks";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/img/logo1.jpg";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  const [heading, setHeading] = useState("");
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  // console.log("user:", user.userData.userName);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const userId = useSelector((state) => state.user.userData);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  const fetchCartData = async () => {
    try {
      const response = await fetch(
        `https://simsun-backend.onrender.com/api/Cart/${userId._id}`
        // `http://localhost:5000/api/Cart/${userId._id}`
      );
      // console.log("this is res: ", response);
      // console.log("this is userid", userId);
      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data = await response.json();
      // console.log("this is my data items: ", data);
      // console.log("this is data we r fetching:", data.items);
      setCartData(data.items);
      // console.log("this is cart data", cartData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, [userId, cartData]);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    console.log("Toggle dropdown clicked");
    setIsOpen(!isOpen);
  };
  const totalQuantity = cartData.length;

  const dropdownRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header>
      {/* <div className=" hidden  ml-4 md:ml-8 gap-3 md:flex text-black-800 flex-row justify-around">
        <p className="head-wel justify-start  hover:text-red-400">
          Simsun Electric Pvt Ltd
        </p>
        <p className=" hover:text-red-400">
          Call Us: <a href="tel:+007 9089 6767">+007 9089 6767</a>
        </p>
        <p className=" hover:text-red-400">
          E-mail:{" "}
          <a href="mailto:simsunelectricwork@gmail.com" id="T9">
            simsunelectricwork@gmail.com
          </a>
        </p>
      </div> */}

      <div className=" z-40 flex items-center justify-center fixed w-full ">
        <nav className="bg-[#161D24] text-white sticky w-full h-auto opacity-100 top-0 z-10 mx-auto">
          <div className="flex items-center font-medium justify-between ">
            <div className="z-50 p-1 lg:w-auto w-full flex justify-between m-4 lg:mr-8 lg:ml-0 ">
              <Link
                to="/"
                className="flex text-3xl  border lg:translate-x-10  justify-center items-center overflow-hidden font-medium mb-0 md:mb-0 mr-0 "
              >
                <div className="flex justify-start   ">
                  <img src={logo} alt="logo img" className="h-12 w-12" />
                </div>
              </Link>

              <div className="flex">
                <div className="flex items-center gap-6 lg:hidden mt-0.5 md:mt-0 z-30 mx-5">
                  {user.userData?.isAdmin ? null : (
                    <div className="text-2xl lg:hidden z-30">
                      <Link to="/shop">
                        <HiOutlineShoppingBag className="z-50" />
                      </Link>
                    </div>
                  )}

                  {user.userData?.isAdmin ? null : (
                    <div className="">
                      {user.isAuthenticated ? (
                        <div className="">
                          <Link to="/Enquiry">
                            <div className="flex gap-1">
                              <HiOutlineShoppingCart className="z-5 text-2xl lg:hidden " />

                              <div>
                                {cartData.length > 0 && (
                                  <span className="bg-red-500 w-4 text-white px-1 py-0 rounded-full align-top ">
                                    {totalQuantity}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        </div>
                      ) : (
                        <div className="text-2xl lg:hidden z-30">
                          <Link to="/auth/consumerLogin">
                            <HiOutlineShoppingCart className="z-50" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}

                  <div
                    className="text-3xl lg:hidden z-30"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? (
                      <RxCross2 className="z-50" />
                    ) : (
                      <IoMdMenu className="z-50" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <ul className="hidden lg:flex lg:flex-row lg:flex-wrap lg:mt-[1rem] lg:mb-[1rem] items-center gap-3 font-[Poppins] mx-8">
              {user.userData?.isAdmin ? null : (
                <div className="">
                  <li>
                    <Link
                      to="/"
                      className="ml-2 text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5"
                    >
                      Home
                    </Link>
                  </li>
                </div>
              )}
              {user.userData?.isAdmin ? null : <NavLinks />}
              {user.userData?.isAdmin ? null : (
                <div className="">
                  <li>
                    <Link
                      to="/shop"
                      className="ml-2 text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5"
                    >
                      Shop
                    </Link>
                  </li>
                </div>
              )}

              {user.userData?.isAdmin ? null : user.isAuthenticated ? (
                <div className="">
                  <li>
                    <Link
                      to="/Enquiry"
                      className=" text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5 relative "
                    >
                      Enquiry
                      {cartData.length > 0 && (
                        <span className="bg-red-500 text-white px-2 py-0 rounded-full absolute top-0 right-0 -mt-4 -mr-5">
                          {totalQuantity}
                        </span>
                      )}
                    </Link>
                  </li>
                </div>
              ) : null}
              {user.userData?.isAdmin ? (
                <div className="">
                  <li>
                    <Link
                      to="/AdminInquiry"
                      className=" hover:text-red-400 text-xl cursor-pointer text-white   font-xl mr-3.5"
                    >
                      Customer Enquiry
                    </Link>
                  </li>
                </div>
              ) : null}
              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "Add" ? "" : "Add"
                      );
                    }}
                  >
                    Add
                    <span className="text-xl md:hidden inline">
                      {heading === "Add" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div className="absolute top-15 hidden group-hover:md:block hover:md:block z-10">
                      <div className="py-0">
                        <div className="w-4 h-4 left-3 absolute mt-1 rotate-45"></div>
                      </div>
                      <div className="bg-[#161D24] p-4 flex rounded-xl -mr-20">
                        <div>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/addProduct"
                              className="block hover:text-red-400"
                            >
                              Add Product
                            </Link>
                          </li>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/addnews"
                              className="block hover:text-red-400"
                            >
                              Add News
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              ) : null}
              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group ml-5">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "List" ? "" : "List"
                      );
                    }}
                  >
                    List
                    <span className="text-xl md:hidden inline">
                      {heading === "List" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div className="absolute top-15 hidden group-hover:md:block hover:md:block z-10">
                      <div className="py-0">
                        <div className="w-4 h-4 left-3 absolute mt-1 rotate-45"></div>
                      </div>
                      <div className="bg-[#161D24] p-4 flex rounded-xl -mr-20">
                        <div>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/productList"
                              className="hover:text-red-400"
                            >
                              Product List
                            </Link>
                          </li>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/newsList"
                              className="hover:text-red-400"
                            >
                              News List
                            </Link>
                          </li>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/feedback"
                              className="hover:text-red-400"
                            >
                              Feedback List
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              ) : null}
              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group ml-5">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "Users" ? "" : "Users"
                      );
                    }}
                  >
                    Users
                    <span className="text-xl md:hidden inline">
                      {heading === "Add" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div className="absolute top-15 hidden group-hover:md:block hover:md:block z-10">
                      <div className="py-0">
                        <div className="w-4 h-4 left-3 absolute mt-1 rotate-45"></div>
                      </div>
                      <div className="bg-[#161D24] p-4 flex rounded-xl -mr-20">
                        <div>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/UsersList"
                              className="block hover:text-red-400"
                            >
                              Customers
                            </Link>
                          </li>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/EngineerList"
                              className="block hover:text-red-400"
                            >
                              Engineers
                            </Link>
                          </li>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/EnginnerReview"
                              className="block hover:text-red-400"
                            >
                              Engineers Request
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              ) : null}
              {user.userData?.isEngineer ? (
                <div className="">
                  <li>
                    <Link
                      to="/EngineerDetails"
                      className=" text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5 relative "
                    >
                      Engineer form
                    </Link>
                  </li>
                </div>
              ) : null}
              {user.userData?.isAdmin ? null : (
                <div className="">
                  <li>
                    <Link
                      to="/ContactUs"
                      className=" hover:text-red-400 text-xl cursor-pointer text-white   font-xl mr-3.5"
                    >
                      Contact Us
                    </Link>
                  </li>
                </div>
              )}

              <div className="text-left cursor-pointer group ml-5 relative">
                <h2
                  className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white inline-block"
                  onClick={() => {
                    setHeading((prevHeading) =>
                      prevHeading === "Users" ? "" : "Users"
                    );
                  }}
                >
                  {user.isAuthenticated ? user.userData.userName : "Login"}
                </h2>
                {
                  <div className="absolute top-15 right-0 hidden group-hover:md:block hover:md:block z-10">
                    <div className="py-0">
                      <div className="w-4 h-4 left-3 absolute mt-1 rotate-45"></div>
                    </div>
                    <div className="bg-[#161D24] p-4 flex rounded-xl">
                      {/* Adjusted alignment and positioning of the elements within the box */}
                      {user.isAuthenticated ? (
                        <div>
                          <li className="flex flex-direction-col">
                            <Link
                              to="/auth/UserProfile"
                              className="block hover:text-red-400 text-xl cursor-pointer text-white font-xl mx-4"
                              onClick={() => setOpen(!open)}
                            >
                              Profile
                            </Link>
                          </li>
                          {user.userData?.isAdmin ? null : (
                            <li className="flex flex-direction-col">
                              <Link
                                to="/prevEnquiry"
                                className="block hover:text-red-400 text-xl cursor-pointer text-white font-xl mx-4"
                                onClick={() => setOpen(!open)}
                              >
                                Previous&nbsp;Enquiry
                              </Link>
                            </li>
                          )}
                          <li className="flex flex-direction-col">
                            <div
                              className="block hover:text-red-400 text-xl cursor-pointer text-white font-xl mx-4"
                              onClick={() => {
                                handleLogout();
                                setOpen(!open);
                              }}
                            >
                              Logout
                            </div>
                          </li>
                        </div>
                      ) : (
                        <div>
                          <li className="flex flex-direction-col">
                            <Link
                              to="/auth/consumerLogin"
                              className="block hover:text-red-400 text-xl cursor-pointer text-white font-xl "
                              onClick={() => setOpen(!open)}
                            >
                              Customer&nbsp;Login
                            </Link>
                          </li>
                          <li className="flex flex-direction-col">
                            <Link
                              to="/auth/EngineerLogin"
                              className="block hover:text-red-400 text-xl cursor-pointer text-white font-xl "
                              onClick={() => setOpen(!open)}
                            >
                              Engineer&nbsp;Login
                            </Link>
                          </li>
                          <li className="flex flex-direction-col">
                            <Link
                              to="/auth/AdminLogin"
                              className="block hover:text-red-400 text-xl cursor-pointer text-white font-xl "
                              onClick={() => setOpen(!open)}
                            >
                              Admin&nbsp;Login
                            </Link>
                          </li>
                        </div>
                      )}
                    </div>
                  </div>
                }
              </div>
            </ul>

            {/* Mobile nav */}
            <ul
              className={`z-20 
        lg:hidden bg-[#161D24] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] "}
        `}
            >
              {user.userData?.isAdmin ? null : (
                <div className="">
                  <Link
                    to="/"
                    className="ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold "
                    onClick={() => setOpen(!open)}
                  >
                    Home
                  </Link>
                </div>
              )}
              {user.userData?.isAdmin ? null : <NavLinks />}

              {user.userData?.isAdmin ? (
                <div className="">
                  <li>
                    <Link
                      to="/AdminInquiry"
                      className=" ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold"
                    >
                      Customer Enquiry
                    </Link>
                  </li>
                </div>
              ) : null}

              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group ml-5">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "Add" ? "" : "Add"
                      );
                    }}
                  >
                    Add
                    <span className="text-xl md:hidden inline">
                      {heading === "Add" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div
                      className={`${
                        heading === "Add" ? "md:hidden" : "hidden"
                      }`}
                    >
                      <div>
                        <h2 className="font-semibold md:pr-0 pr-5 flex justify-between items-center">
                          <ul className="pl-4">
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/addProduct"
                                className="block hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Add Product
                              </Link>
                            </li>
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/addnews"
                                className="block hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Add News
                              </Link>
                            </li>
                          </ul>
                        </h2>
                      </div>
                    </div>
                  }
                </div>
              ) : null}

              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group ml-5">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "List" ? "" : "List"
                      );
                    }}
                  >
                    List
                    <span className="text-xl md:hidden inline">
                      {heading === "List" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div
                      className={`${
                        heading === "List" ? "md:hidden" : "hidden"
                      }`}
                    >
                      <div>
                        <h2 className="font-semibold md:pr-0 pr-5 flex justify-between items-center">
                          <ul className="pl-4">
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/productList"
                                className="hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Product List
                              </Link>
                            </li>
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/newsList"
                                className="hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                News List
                              </Link>
                            </li>
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/feedback"
                                className="hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Feedback List
                              </Link>
                            </li>
                          </ul>
                        </h2>
                      </div>
                    </div>
                  }
                </div>
              ) : null}
              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group ml-5">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "Users" ? "" : "Users"
                      );
                    }}
                  >
                    Users
                    <span className="text-xl md:hidden inline">
                      {heading === "Users" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div
                      className={`${
                        heading === "Users" ? "md:hidden" : "hidden"
                      }`}
                    >
                      <div>
                        <h2 className="font-semibold md:pr-0 pr-5 flex justify-between items-center">
                          <ul className="pl-4">
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/UsersList"
                                className="block hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Customers
                              </Link>
                            </li>
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/EngineerList"
                                className="block hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Engineers
                              </Link>
                            </li>
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/EnginnerReview"
                                className="block hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Engineers Request
                              </Link>
                            </li>
                          </ul>
                        </h2>
                      </div>
                    </div>
                  }
                </div>
              ) : null}

              <div className="">
                <Link
                  to="/ContactUs"
                  className="ml-5 cursor-pointer text-white text-xl hover:text-red-400 font-semibold mt-7"
                  onClick={() => setOpen(!open)}
                >
                  Contact Us
                </Link>
              </div>

              <div className="text-left  relative inline-block cursor-pointer group ml-5">
                <h2
                  className="bg-red-500 hover:bg-red-600 duration-300 flex gap-4 px-5 py-3 font-[Poppins] text-lg rounded-md text-white "
                  onClick={() => {
                    setHeading((prevHeading) =>
                      prevHeading === "Users" ? "" : "Users"
                    );
                  }}
                >
                  {user.isAuthenticated ? user.userData.userName : " Login"}
                  <span className="text-xl md:hidden inline mt-1">
                    {heading === "Users" ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                  <span className="text-xl md:mt-2 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <FaAngleDown />
                  </span>
                </h2>

                {
                  <div
                    className={`${
                      heading === "Users" ? "md:hidden" : "hidden"
                    }`}
                  >
                    <div>
                      <h2 className="font-semibold md:pr-0 pr-5 flex justify-between items-center">
                        <ul className="pl-4">
                          {user.isAuthenticated ? (
                            <>
                              <li className="py-1 flex flex-direction-col">
                                <Link
                                  to="/auth/UserProfile"
                                  className="block hover:text-red-400"
                                  onClick={() => setOpen(!open)}
                                >
                                  Profile
                                </Link>
                              </li>
                              {user.userData?.isAdmin ? null : (
                                <li className="py-1 flex flex-direction-col">
                                  <Link
                                    to="/prevEnquiry"
                                    className="block hover:text-red-400"
                                    onClick={() => setOpen(!open)}
                                  >
                                    Previous Enquiry
                                  </Link>
                                </li>
                              )}
                              <div
                                className="py-1 flex flex-direction-col"
                                onClick={() => {
                                  handleLogout();
                                  setOpen(!open);
                                }}
                              >
                                Logout
                              </div>
                            </>
                          ) : (
                            <>
                              <li className="py-1 flex flex-direction-col">
                                <Link
                                  to="/auth/consumerLogin"
                                  className="block hover:text-red-400"
                                  onClick={() => setOpen(!open)}
                                >
                                  Customer Login
                                </Link>
                              </li>
                              <li className="py-1 flex flex-direction-col">
                                <Link
                                  to="/auth/EngineerLogin"
                                  className="block hover:text-red-400"
                                  onClick={() => setOpen(!open)}
                                >
                                  Engineer Login
                                </Link>
                              </li>
                              <li className="py-1 flex flex-direction-col">
                                <Link
                                  to="/auth/AdminLogin"
                                  className="block hover:text-red-400"
                                  onClick={() => setOpen(!open)}
                                >
                                  Admin Login
                                </Link>
                              </li>
                            </>
                          )}
                        </ul>
                      </h2>
                    </div>
                  </div>
                }
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
