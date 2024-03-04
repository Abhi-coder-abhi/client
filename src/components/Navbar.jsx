import React from "react";
import Logo from "../assets/img/logo1.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  const [flyer1, setFlyer1] = React.useState(false);
  const [flyerTwo1, setFlyerTwo1] = React.useState(false);

  const [flyer2, setFlyer2] = React.useState(false);
  const [flyerTwo2, setFlyerTwo2] = React.useState(false);

  const [flyer3, setFlyer3] = React.useState(false);
  const [flyerTwo3, setFlyerTwo3] = React.useState(false);

  const [flyer4, setFlyer4] = React.useState(false);
  const [flyerTwo4, setFlyerTwo4] = React.useState(false);

  const [flyer5, setFlyer5] = React.useState(false);
  const [flyerTwo5, setFlyerTwo5] = React.useState(false);
  function activateLasers() {
    setFlyer(false);
    setFlyer1(false);
    setFlyer2(false);
    setFlyer3(false);
    setFlyer4(false);
    setFlyer5(false);
  }
  return (
    <header class=" top-0 w-full  z-50 bg-[#161D24] flex justify-around">
      <div class=" w-full  p-2  flex flex-wrap  flex-col md:flex-row  md:justify-normal md:items-center   xl:bg-inherit    justify-around ">
        <div className="flex flex-row  items-center justify-between  md:p-1  sm:ml-10 md:ml-2">
          <Link
            to="/"
            class="flex text-3xl text-white border md:translate-x-10  justify-center items-center border-red-400 rounded-full overflow-hidden font-medium mb-4 md:mb-0 "
          >
            <div className=" rounded-full ">
              <img
                src={Logo}
                alt="logo"
                className="sm:w-25 md:w-15 xl:w-16 w-16 "
              />
            </div>
          </Link>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex items-center justify-center ml-85 flex-col w-full md:w-4/5 xl:w-[90%]  " +
            (navbarOpen ? " block  flex-col   p-5" : " hidden")
          }
        >
          <div class="md:ml-auto md:mr-auto  font-4 pt-1 md:pl-14 pl-1 flex flex-wrap  md:text-base text-1xl md:justify-center sm:items-center   flex-col sm:flex-row ">
            {/* first dropdown start here */}
            <div className="relative md:mr-4  z-10 opacity-100">
              <button
                type="button"
                className="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                onMouseOver={() => (
                  setFlyer(!flyer),
                  setFlyerTwo(false),
                  setFlyer1(false),
                  setFlyer2(false),
                  setFlyer3(false),
                  setFlyer4(false),
                  setFlyer5(false)
                )}
              >
                <span className=" text-xl">About Us</span>
                <svg
                  className={
                    flyer === true
                      ? "transform rotate-180 ml-3 h-5 w-5  transition ease-out duration-200"
                      : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? "opacity-100  translate-y-0  transition ease-out duration-200 absolute z-20 -ml-5 mt-3   transform px-1 w-[13rem] max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 bg-red lg:-translate-x-1/2"
                    : "hidden opacity-100 translate-y-1 absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 "
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black  ring-opacity-5 overflow-hidden">
                  <div
                    className="relative grid gap  bg-[#161D24] px-1 py-1 sm:gap-0 "
                    onClick={activateLasers}
                  >
                    <Link
                      to="/about/ourcompany"
                      className="-m-3  flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4 ">
                        <p className="text-base font-medium text-white">
                          Our Company
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/about/ourteam"
                      className="-m-3  flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white ">
                          Our Team
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/about/ourcompanysuccess"
                      className="-m-3  flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Our Success Story
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/about/news"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          News & References
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/addProduct"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Add Product
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* first dropdown end here */}

            {/* second dropdown start here */}
            <div className="relative md:mr-4 opacity-100 z-10">
              <button
                type="button"
                className="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                onMouseOver={() => (
                  setFlyer1(!flyer1),
                  setFlyerTwo1(false),
                  setFlyer(false),
                  setFlyer2(false),
                  setFlyer3(false),
                  setFlyer4(false),
                  setFlyer5(false)
                )}
              >
                <span className=" text-xl">Product</span>
                <svg
                  className={
                    flyer1 === true
                      ? "transform rotate-180 ml-3 h-5  transition ease-out duration-200 w-5"
                      : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer1(false)}
                className={
                  flyer1
                    ? "opacity-100  translate-y-0 transition ease-out duration-200 absolute z-20 -ml-4 mt-3   transform px-2 w-[15rem] max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black  ring-opacity-5 overflow-hidden">
                  <div
                    className="relative grid gap-4 bg-[#161D24]  sm:gap-0 "
                    onClick={activateLasers}
                  >
                    <Link
                      to="/product/lift"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">Lift</p>
                      </div>
                    </Link>
                    <Link
                      to="/product/escalator"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Escalators
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/product/LiftSparePart"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Lift Spare parts
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/product/EsclatorSparePart"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Escalator spare parts
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* second dropdown end here */}

            {/* third dropdown start here */}
            <div className="relative md:mr-4 opacity-100 z-10">
              <button
                type="button"
                className="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                onMouseOver={() => (
                  setFlyer2(!flyer),
                  setFlyerTwo2(false),
                  setFlyer1(false),
                  setFlyer(false),
                  setFlyer3(false),
                  setFlyer4(false),
                  setFlyer5(false)
                )}
              >
                <span className=" text-xl">Services</span>
                <svg
                  className={
                    flyer2 === true
                      ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                      : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer2(false)}
                className={
                  flyer2
                    ? "  z-20 opacity-100 translate-y-0 transition ease-out duration-200 absolute  -ml-4 mt-3   transform px-2 w-[15rem] max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black  ring-opacity-5 overflow-hidden">
                  <div
                    className="relative grid gap-4 bg-[#161D24] px-2 py-6 sm:gap-0 "
                    onClick={activateLasers}
                  >
                    <Link
                      to="/services/NewInstallationServices"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          New Installation Services
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/services/AnnualMaintainenceServices"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Annual Maintainence Services
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/services/BreakdownServices"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Breakdown Services
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/services/Maintenance"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Maintenance
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/services/ElevatorModerinazation"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Elevator Moderinazation
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/services/EscalatorAutowalkModernization"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Elevator Walk
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* third dropdown end here */}

            <Link
              to="/shop"
              className="mr-5 cursor-pointer text-xl text-gray-300 hover:text-white font-medium "
            >
              Shops
            </Link>

            {/* fourth dropdown start here */}
            <div className="relative md:mr-4 opacity-100 z-10">
              <button
                type="button"
                className="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                onMouseOver={() => (
                  setFlyer3(!flyer),
                  setFlyerTwo3(false),
                  setFlyer1(false),
                  setFlyer2(false),
                  setFlyer(false),
                  setFlyer4(false),
                  setFlyer5(false)
                )}
              >
                <span className=" text-xl">Customer Services</span>
                <svg
                  className={
                    flyer3 === true
                      ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                      : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer3(false)}
                className={
                  flyer3
                    ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-20 -ml-4 mt-3   transform px-2 w-[15rem] max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black  ring-opacity-5 overflow-hidden">
                  <div
                    className="relative grid gap-6 bg-[#161D24] px-2 py-4 sm:gap-0 "
                    onClick={activateLasers}
                  >
                    <Link
                      to="/customerservices/prevEnquiry"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Prev Enquiry
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/customerservices/ReturnandRefunds"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Return & Refunds
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/customerservices/ManageAddress"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Manage addresses
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/customerservices/PaymentSetting"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Payment Settings
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/customerservices/AccountSetting"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Account Settings
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* fourth dropdown end here */}

            {/* fifth dropdown start here */}
            <div className="relative md:mr-4 opacity-100 z-10">
              <button
                type="button"
                className="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                onMouseOver={() => (
                  setFlyer4(!flyer),
                  setFlyerTwo4(false),
                  setFlyer1(false),
                  setFlyer2(false),
                  setFlyer3(false),
                  setFlyer(false),
                  setFlyer5(false)
                )}
              >
                <span className=" text-xl">Register</span>
                <svg
                  className={
                    flyer4 === true
                      ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                      : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer4(false)}
                className={
                  flyer4
                    ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-20 -ml-4 mt-3   transform px-2 w-[15rem] max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black  ring-opacity-5 overflow-hidden">
                  <div
                    className="relative grid gap-6 bg-[#161D24] px-2 py-4 sm:gap-0 "
                    onClick={activateLasers}
                  >
                    <Link
                      to="/auth/consumerRegistration"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Consumer Registration
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/auth/engineerRegistration"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Engineer Registration
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/auth/adminRegistration"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Admin Registration
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* fifth dropdown end here */}

            {/* sixth dropdown start here */}
            <div className="relative md:mr-4 opacity-100 z-10">
              <button
                type="button"
                className="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                onMouseOver={() => (
                  setFlyer5(!flyer),
                  setFlyerTwo5(false),
                  setFlyer1(false),
                  setFlyer2(false),
                  setFlyer3(false),
                  setFlyer4(false),
                  setFlyer(false)
                )}
              >
                <span className=" text-xl">Login</span>
                <svg
                  className={
                    flyer5 === true
                      ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                      : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer5(false)}
                className={
                  flyer5
                    ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-20 -ml-4 mt-3   transform px-2 w-[15rem] max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 block"
                    : "hidden opacity-0 translate-y-1 absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 "
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black  ring-opacity-5 overflow-hidden">
                  <div
                    className="relative grid gap-6 bg-[#161D24] px-2 py-6 sm:gap-0"
                    onClick={activateLasers}
                  >
                    <Link
                      to="/auth/consumerLogin"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Consumer Login
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/auth/EngineerLogin"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Engineer Login
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/auth/AdminLogin"
                      className="-m-3 flex items-start rounded-lg hover:bg-gray-800 "
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          Admin Login
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* sixth dropdown end here */}

            <Link
              to={"/ContactUs"}
              class="mr-5 cursor-pointer text-gray-300 text-xl hover:text-white font-semibold "
            >
              Contact Us
            </Link>

            <Link
              to={"/Cart"}
              class="mr-5 cursor-pointer text-xl text-gray-300 hover:text-white font-semibold "
            >
              Enquiry
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
