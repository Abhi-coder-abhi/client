import React, { useState } from "react";

const NewInstallationServices = () => {
  const [showContactNumberResidential, setShowContactNumberResidential] =
    useState(false);

  const [showContactNumberComercial, setShowContactNumberComercial] =
    useState(false);

  const [showContactNumberComercial2, setShowContactNumberComercial2] =
    useState(false);

  const [showContactNumberResidential2, setShowContactNumberResidential2] =
    useState(false);

  const handleGetContactClick4 = () => {
    setShowContactNumberComercial2(!showContactNumberComercial2);
  };

  const handleGetContactClick3 = () => {
    setShowContactNumberResidential2(!showContactNumberResidential2);
  };

  const handleGetContactClick2 = () => {
    setShowContactNumberComercial(!showContactNumberComercial);
  };

  const handleGetContactClick = () => {
    setShowContactNumberResidential(!showContactNumberResidential);
  };

  return (
    <>
      <div className=" md:mt-20  mx-4 min-h-screen bg-gray-100 flex flex-col items-center justify-center pt-24 md:pt-4">
        <div className="mt-4 bg-white p-8 rounded shadow-md mb-4 w-full md:w-1/2 lg:w-4/5">
          <h1 className="text-2xl font-semibold mb-4">Electric Installation</h1>
        </div>

        <div className="bg-blue-400 p-8 rounded shadow-md text-white mb-4 w-full md:w-1/2 lg:w-4/5">
          <h2 className="text-2xl font-semibold mb-4">
            Residential Installation
          </h2>
          <p>
            At Simsun Electric, we understand that your home is your sanctuary.
            Our residential installation services are designed to enhance your
            living space. From custom lighting solutions to smart home setups,
            we've got your electrical needs covered.
          </p>
          <a
            href="mailto:simsunelectricwork@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
          >
            Request
          </a>
          <button
            onClick={handleGetContactClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
          >
            {showContactNumberResidential
              ? "Contact: +007-9089-6767"
              : "Get Contact"}
          </button>
        </div>

        <div className="bg-green-400 p-8 rounded shadow-md text-white mb-4 w-full md:w-1/2 lg:w-4/5">
          <h2 className="text-2xl font-semibold mb-4">
            Commercial Installation
          </h2>
          <p>
            When it comes to powering your business, you need reliable and
            efficient electrical solutions. Our commercial installation services
            are tailored to your industry, whether you run a restaurant, office,
            or manufacturing facility. Count on us for dependable electrical
            infrastructure.
          </p>
          <a
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
            href="mailto:simsunelectricwork@gmail.com"
          >
            Request
          </a>
          <button
            onClick={handleGetContactClick2}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
          >
            {showContactNumberComercial
              ? "Contact: +007-9089-6767"
              : "Get Contact"}
          </button>
        </div>

        <div className="bg-blue-400 p-8 rounded shadow-md text-white mb-4 w-full md:w-1/2 lg:w-4/5">
          <h2 className="text-2xl font-semibold mb-4">
            Residential Installation
          </h2>
          <p>
            For residential installations, we provide top-quality electrical
            services to ensure your home is safe and well-connected. Our
            experienced electricians are here to help you with all your
            residential electrical needs.
          </p>
          <a
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
            href="mailto:simsunelectricwork@gmail.com"
          >
            Request
          </a>
          <button
            onClick={handleGetContactClick3}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
          >
            {showContactNumberResidential2
              ? "Contact: +007-9089-6767"
              : "Get Contact"}
          </button>
        </div>

        <div className="bg-green-400 p-8 rounded shadow-md text-white w-full mb-5 md:w-1/2 lg:w-4/5">
          <h2 className="text-2xl font-semibold mb-4">
            Commercial Installation
          </h2>
          <p>
            When it comes to commercial electrical installations, our team has
            the expertise to handle large-scale projects. We offer tailored
            solutions to meet the electrical requirements of your business,
            ensuring efficiency and reliability.
          </p>
          <a
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
            href="mailto:simsunelectricwork@gmail.com"
          >
            Request
          </a>
          <button
            onClick={handleGetContactClick4}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
          >
            {showContactNumberComercial2
              ? "Contact: +007-9089-6767"
              : "Get Contact"}
          </button>
        </div>
      </div>
    </>
  );
};

export default NewInstallationServices;
