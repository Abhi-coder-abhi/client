import React from "react";

const BreakdownServices = () => {
  const phoneNumber = "+00790896767"; // Replace with your actual phone number

  const handleCallNowClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      <div className="mt-0 md:mt-16 min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white font-sans pt-28 md:pt-4">
        <header className="p-6 text-center">
          <h1 className="text-4xl font-semibold">Breakdown Services</h1>
          <p className="text-lg mt-2">Reliable Assistance When You Need It</p>
        </header>
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-black w-full md:w-1/2 h-full">
            <h2 className="text-2xl font-semibold mb-4">
              Emergency Roadside Assistance
            </h2>
            <p className="text-black">
              Our team is here 24/7 to provide you with efficient emergency
              roadside assistance. Whether you have a flat tire, dead battery,
              or need a tow, we've got you covered.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-black w-full md:w-1/2 h-full">
            <h2 className="text-2xl font-semibold mb-4">
              Vehicle Repair Services
            </h2>
            <p className="text-black">
              We offer a range of vehicle repair services to get you back on the
              road as quickly as possible. Our experienced technicians can
              diagnose and fix a wide variety of issues.
            </p>
          </div>
        </section>
        <section className="p-6 text-center">
          <p className="text-xl font-semibold mb-4">
            Contact us now for immediate assistance
          </p>
          <button
            onClick={handleCallNowClick}
            className="bg-yellow-500 text-blue-900 hover:bg-yellow-600 hover:text-white py-3 px-6 rounded-lg text-lg transition duration-300"
          >
            Call Now
          </button>
        </section>
      </div>
    </>
  );
};

export default BreakdownServices;
