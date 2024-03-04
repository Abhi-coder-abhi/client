import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Country, State, City } from "country-state-city";
import { useEffect } from "react";

const EngineerRegister = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [certificates, setCertificates] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [experience, setExperience] = useState("");
  const [field, setfield] = useState("");
  const [whatsappNumber, setwhatsappNumber] = useState("");
  const [location, setlocation] = useState("");
  const [address, setaddress] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [description, setdescription] = useState("");
  // const [selectedCountry, setSelectedCountry] = useState("");

  const navigate = useNavigate();

  const [stateData, setStateDate] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    setStateDate(() => {
      return State.getStatesOfCountry("IN");
    });
  }, []);

  const handleStateChange = (event) => {
    const selectedStateObject = stateData.find(
      (state) => state.name === event.target.value
    );
    setSelectedState(selectedStateObject);
  };

  useEffect(() => {
    selectedState &&
      setCities(() => {
        return City.getCitiesOfState("IN", selectedState.isoCode);
      });
  }, [selectedState]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://simsun-backend.onrender.com/api/EngineerRegister",
        // "http://localhost:5000/api/EngineerRegister",
        {
          fullName,
          email,
          password,
          userName,
          phoneNumber,
          experience,
          certificates,
          field,
          whatsappNumber,
          location,
          address,
          pinCode,
          description,
          state: selectedState.name,
          city: selectedCity,
        }
      );

      if (response.status === 200) {
        const json = response.data;
        console.log(json);
        toast.success("Send to Admin, wait for approval you will get mail !");
        navigate("/auth/EngineerLogin");
      } else {
        console.error("Registration failed with status code:", response.status);
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen h-auto bg-gray-100 pt-28 md:pt-4">
      <div className="mt-24 mb-24 mx-6 lg:mx-[6rem] w-full max-w-5xl p-1 lg:p-6 bg-white rounded-md shadow-md flex flex-col ">
        <h1 className="text-2xl lg:text-3xl pl-6 font-bold mt-3 mb-2 lg:mb-4">
          Engineer Registration
        </h1>
        <form
          onSubmit={handleSubmit}
          className="lg:flex lg:flex-wrap p-6 h-auto [font-family: 'Inter', sans-serif]"
        >
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="fullName"
              className="block text-md font-medium text-gray-600"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-600"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="password"
              className="block text-md font-medium text-gray-600"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="userName"
              className="block text-md font-medium text-gray-600"
            >
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="phoneNumber"
              className="block text-md font-medium text-gray-600"
            >
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Experience */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="experience"
              className="block text-md font-medium text-gray-600"
            >
              Experience<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Field */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="field"
              className="block text-md font-medium text-gray-600"
            >
              Working Field<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="field"
              name="field"
              value={field}
              onChange={(e) => setfield(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="degree"
              className="block text-md font-medium text-gray-600"
            >
              Degree and Certificates
              <span className="text-red-500">(paste links if any)</span>
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={field}
              onChange={(e) => setCertificates(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* WhatsApp Number */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="whatsappNumber"
              className="block text-md font-medium text-gray-600"
            >
              WhatsApp Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="whatsappNumber"
              name="whatsappNumber"
              value={whatsappNumber}
              onChange={(e) => setwhatsappNumber(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="location for working"
              className="block text-md font-medium text-gray-600"
            >
              Location For Working<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* States */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="state"
              className="block text-md font-medium text-gray-600"
            >
              State<span className="text-red-500">*</span>
            </label>
            <select
              value={selectedState ? selectedState.name : ""}
              onChange={handleStateChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select a State</option>
              {stateData.map((state) => (
                <option key={state.isoCode} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="city"
              className="block text-md font-medium text-gray-600"
            >
              City<span className="text-red-500">*</span>
            </label>
            <select
              name="city"
              id="city"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
              }}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select a City</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          {/* Pin Code */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="pinCode"
              className="block text-md font-medium text-gray-600"
            >
              Pin Code<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              value={pinCode}
              onChange={(e) => setpinCode(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="address"
              className="block text-md font-medium text-gray-600"
            >
              Address<span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div className="mb-4 lg:w-full lg:h-[2rem] lg:pl-2">
            <label
              htmlFor="description"
              className="block text-md font-medium text-gray-600"
            >
              Description<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="mt-1 p-2 w-full h-[70px] border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white mt:[1rem] lg:mt-[4rem] py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Register
          </button>
        </form>
        <div className="mt-0 text-center">
          <Link
            to="/auth/EngineerLogin"
            className="text-gray-500 opacity-75 hover:underline hover:opacity-100"
          >
            Already have an account?
            <span className="text-blue-500"> Login here</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EngineerRegister;
