import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConsumerRegister = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setaddress] = useState("");

  const navigate = useNavigate();

  const handleConsumerRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://simsun-backend.onrender.com/api/consumerRegister",
        {
          fullName,
          userName,
          email,
          password,
          phoneNumber,
          address,
        }
      );

      if (response.status === 200) {
        // Registration was successful
        const json = response.data;
        console.log(json);
        navigate("/auth/consumerLogin");
        toast.success("Successfully registered");
      } else {
        // Handle other status codes or errors here
        console.error("Registration failed with status code:", response.status);
        toast.error("Email or Username is already exist");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Registration failed:", error.message);
      toast.error("Email or Username is already exist");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setaddress("");
    }
  };

  return (
    <>
      <div className="mt-16 h-screen md:flex text-center pt-28 md:pt-4">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden ">
          <div className="flex flex-col items-center">
            <h2 className="text-white font-bold text-5xl font-sans">Simsun</h2>
            <p className="text-white text-4xl m-2 sm:-translate-x-4">
              The most popular peer-to-peer business group
            </p>
            <button
              type="submit"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold"
            >
              Read More
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2  justify-center py-10 items-center ">
          <form className="  xl:w-full xl:px-10 xl:mx-5">
            <div className="flex flex-col mx-8 lg:mx-4">
              <h1 className="text-gray-800 font-bold text-3xl lg:text-4xl mb-1 leading-[40px]">
                Welcome for Consumer Register
              </h1>
              <p className="text-2xl lg:text-3xl font-normal text-gray-600 mt-4  md:mt-2 mb-6">
                Ready to create an account?
              </p>
              <div className="flex items-center  border-2 py-1 px-3 rounded-2xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none xl:w-full xl:h-10 xl:rounded-lg xl:ml-2 "
                  type="text"
                  name=""
                  id=""
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="flex items-center border-2 py-1 px-3 rounded-2xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none xl:w-full xl:h-10 xl:rounded-lg xl:ml-2"
                  type="text"
                  name=""
                  id=""
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="flex items-center border-2 py-1 px-3 rounded-2xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none xl:w-full xl:h-10 xl:rounded-lg xl:ml-2"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center border-2 py-1 px-3 rounded-2xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none xl:w-full xl:h-10 xl:rounded-lg xl:ml-2"
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center border-2 py-1 px-3 rounded-2xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none xl:w-full xl:h-10 xl:rounded-lg xl:ml-2"
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="flex items-center border-2 py-1 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none xl:w-full xl:h-10 xl:rounded-lg xl:ml-2"
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                onClick={handleConsumerRegister}
              >
                Register
              </button>
              {/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              Have an account ?
            </span> */}
              <Link to="/auth/consumerLogin" className="hover:underline">
                Already have an account ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConsumerRegister;
