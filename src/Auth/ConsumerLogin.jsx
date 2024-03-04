import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "../store/slices/UserSlice";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConsumerLogin = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://simsun-backend.onrender.com/api/consumerLogin",
        {
          email,
          password,
        }
      );

      if (response.status === 200 && response.data.success) {
        const json = response.data;
        dispatch(logIn(json));
        console.log(json);
        navigate("/");
      } else {
        console.error("Login failed with status code:", response.status);
        toast.error("Invalid email or password");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Login failed:", error.message);
      toast.error("Invalid email or password");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <section className="md:mt-16 gradient-form h-full z-10 flex justify-center pt-28 md:pt-4">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container*/}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/*Logo*/}
                    <div className="text-center">
                      {/* <img className="mx-auto w-48" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" /> */}
                      <h4 className="mb-10 mt-1 pt-4 pb-1 text-xl sm:text-2xl font-semibold text-white">
                        We are The Simsun Team
                      </h4>
                    </div>
                    <form>
                      <p className="mb-6 sm:text-2xl">
                        Please login to your consumer account
                      </p>
                      {/*Username input*/}
                      <div>
                        <label
                          htmlFor="input-group-1"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your Email
                        </label>
                        <div className="flex">
                          <div className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg
                              className="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 16"
                            >
                              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="input-group-1"
                            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="xyz@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <label
                          htmlFor="website-admin"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg
                              className="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                          </span>
                          <input
                            type="password"
                            id="website-admin"
                            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      {/*Submit button*/}
                      <div className="mb-12 pb-1 pt-1 text-center mt-4">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs sm:text-2xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                        {/*Forgot password link*/}
                        <Link to={`/auth/consumerRegistration`}>
                          Doesn't have an acount?
                        </Link>
                        {/* <a href="/auth/consumerRegistration">Doesn't have an acount?</a> */}
                      </div>
                      {/*Register button*/}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2 text-white">
                          Create new account
                        </p>
                        {/* <Link  */}
                        <Link
                          to="/auth/consumerRegistration"
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Register
                          {/* </button> */}
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Right column container with background and description*/}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 sm:text-5xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="sm:text-2xl">
                      At our core, we are more than just a company; we are a
                      community driven by a shared vision. We believe in the
                      power of innovation and the potential it holds to
                      transform lives. Our commitment goes beyond business
                      objectives; it extends to making a positive impact on
                      society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsumerLogin;
