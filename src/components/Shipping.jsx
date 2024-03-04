import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShippingAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle shipping address submission logic here
    // You can send this data to the server or perform any other actions

    console.log("Shipping Address Submitted:", {
      fullName,
      phoneNumber,
      email,
      address,
      city,
      postalCode,
      country,
    });
  };

  const customer = useSelector((customer) => customer.user);

  useEffect(() => {
    if (!customer?.isAuthenticated) {
      // Redirect to customer login page if not logged in
      navigate("/auth/consumerLogin");
    }
  }, [customer]);

  const handlePayment = async (e) => {
    const response = await fetch;
  };

  return (
    <div className="container bg-gray-400 mx-auto p-8 mt-4">
      <h1 className="mt-12 text-3xl font-bold mb-6 text-center">
        Shipping Address
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-gray-700 p-8 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-white"
          >
            Full Name
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
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-white"
          >
            Phone Number
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
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
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
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-white"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium text-white"
          >
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-white"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          onClick={handlePayment}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
