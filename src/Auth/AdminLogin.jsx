import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logIn } from "../store/slices/UserSlice";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://simsun-backend.onrender.com/api/adminLogin",
        {
          email,
          password,
        }
      );
      console.log(response.status);
      if (response.status == 200 && response.data.success) {
        // Registration was successful
        const json = response.data;
        dispatch(logIn(json));
        console.log(json);
        navigate("/AdminInquiry");
      } else {
        toast.error("Invalid email or password");
        // Handle other status codes or errors here
        console.error("Registration failed with status code:", response.status);
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
      toast.error("Invalid email or password");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div
      className="md:mt-16 bg-no-repeat bg-cover bg-center relative pt-28 md:pt-4"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)",
      }}
    >
      <div className="sm:absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0" />
      <div className="min-h-screen sm:flex sm:flex-row justify-center mx-4">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-0">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <h1 className="mb-3 font-bold text-5xl"> Welcome back admin </h1>
            <p className="pr-3 text-3xl">
              {" "}
              Please enter your username and password to access the admin
              portal.
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-0">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Login </h3>
              <p className="text-gray-500">Please Login to your account.</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between"></div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>Copyright © Simsun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
