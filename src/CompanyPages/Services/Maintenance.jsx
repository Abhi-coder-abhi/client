import React from "react";
import elevtor from "../../assets/img/elevetor.jpg";
import business from "../../assets/img/business-clock.jpg";
import maintainence from "../../assets/img/maintainence-plan.jpg";
import serviceLife from "../../assets/img/services-life.jpg";
import Service24hrs from "../../assets/img/24hrs-service.jpg";
import elev from "../../assets/img/elev.jpg";
import elveMaintain from "../../assets/img/elevetor-maintain.jpg";
import MaintenanceCarousal from "./MaintenanceCarousal";
import { Link } from "react-router-dom";
const Maintenance = () => {
  const services = [
    {
      title: "Keeping your business running like clockwork  ",
      description:
        "High-quality maintenance will help your equipment, and your business, to have a long and happy life. Reliable equipment plays a big part in creating and maintaining a great user experience in buildings of all kinds.",
      buttonText: "Contact an Expert",
      imageUrl: business,
    },
    {
      title: "Relax, we’ve got you well covered",
      description:
        "Forget the stress and hassle of unreliable equipment and complaints from users. With a tailored maintenance plan and easy ways to keep track of what’s going on, you can relax and let us take care of everything.",
      buttonText: "Request a quote",
      imageUrl: maintainence,
    },
    {
      title: "Making everyday life better for everyone ",
      description:
        "When people can rely on the fact that the equipment in your building is reliable and safe to use, everyday life is that little bit easier and more enjoyable for everyone.",
      buttonText: "Get in touch",
      imageUrl: serviceLife,
    },
  ];
  const services2 = [
    {
      title: "Preventive maintenance: Simsun Care ",
      description:
        "Flexible, tailored maintenance for all equipment types and brands to keep everything running safely and smoothly.",
      buttonText: "Contact an Expert",
      imageUrl: elveMaintain,
    },
    {
      title: "Proactive maintenance: Simsun 24/7 Connected Services",
      description:
        "Take advantage of the latest in intelligent proactive maintenance with Simsun 24/7 Connected Services – fewer faults, faster repairs, increased safety, and a clear picture of everything that’s going on with your equipment.",
      buttonText: "Request a quote",
      imageUrl: Service24hrs,
    },
    {
      title: "Manage the people flow and user experience with Simsun DX ",
      description:
        "Our connected Simsun DX elevator solutions add value to your building and make sure it’s ready for whatever the future brings.",
      buttonText: "Get in touch",
      imageUrl: elev,
    },
  ];

  return (
    <>
      <div className="mt-0 md:mt-16  flex justify-center items-center  flex-col pt-20 md:pt-4">
        <div className=" w-full h-[40rem] ">
          <div
            className="relative top-0 left-0 w-full min-h-[600px] flex flex-col items-center justify-center bg-[#202b35] bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.6), rgb(0, 0, 0, 0.6)), url(${elevtor})`,
            }}
          >
            <div className="absolute inset-0 mt-[9rem] md:mt-[16rem] justify-center mx-2 items-center ">
              <div className="p-5 rounded-lg shadow-lg text-center bg-transparent  flex justify-center items-center flex-col md:-translate-y-44 sm:-translate-y-24 -translate-y-10 ] ">
                <h1 className="relative md:text-4xl lg:text-4xl font-semibold text-white max-w-[85%] text-[1.6rem] md:mt-[4rem]">
                  MAINTENANCE SERVICES FOR ELEVATORS AND ESCALATORS
                </h1>
                <p className=" text-[1.3rem] md:text-2xl lg:text-3xl mt-4 text-white ">
                  We offer a wide range of intelligent and flexible maintenance
                  services that help keep your building moving 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="sm:mt-7 mt-32 mb-8 flex flex-col justify-center items-center w-full">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">How can we help you?</h2>
            <div className="border-b-2 border-blue-500 mx-auto mt-2 w-80" />
          </div>
          <div className="flex flex-wrap justify-around mt-4  w-full">
            <div className="bg-white m-4 p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] flex  items-center justify-around flex-col min-h-[15rem] font-semibold">
              <h2 className="text-3xl text-blue-700">Become a customer</h2>

              <Link
                to="/ContactUs"
                className="text-blue-500 border border-blue-500  px-8 py-2 rounded-lg hover:scale-105 hover:bg-blue-500 hover:text-white flex justify-center items-center text-2xl cursor-pointer"
              >
                Contact an Expert
              </Link>
            </div>
            <div className="bg-white m-4 p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] flex  items-center justify-around flex-col min-h-[15rem] font-semibold">
              <h2 className="text-3xl text-blue-700">Ask us for a quote</h2>

              <a
                href="mailto:simsunelectricwork@gmail.com"
                className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white  px-8 py-2 rounded-lg hover:scale-105 flex justify-center items-center text-2xl cursor-pointer"
              >
                Request a quote
              </a>
            </div>
            <div className="bg-white m-4 p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] flex  items-center justify-around flex-col min-h-[15rem] font-semibold">
              <h2 className="text-3xl text-blue-700">
                Report a service need or incident
              </h2>

              <a
                href="mailto:simsunelectricwork@gmail.com"
                className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white px-8 py-2 rounded-lg hover:scale-105 flex justify-center items-center text-2xl cursor-pointer"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="sm:mt-7 mb-6 flex flex-col justify-center items-center w-full">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
              We're here to make life easier
            </h2>
            <div className="border-b-2 border-blue-500 mx-auto mt-2 w-80" />
            <div className="text-xl md:text-2xl mt-4">
              Everyone who uses your building benefits from SIMSUN escalator and
              elevator maintenance services.
            </div>
          </div>
          <div className="flex flex-wrap justify-around mt-6 md:mt-4  w-full ">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white hover:scale-105 transition-all delay-200 cursor-pointer m-4 mb-6 rounded-lg shadow-lg sm:w-[30%] w-[90%] flex flex-col items-center min-h-[20rem] font-semibold text-center"
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full object-cover  mb-4"
                />
                <h2 className="text-2xl md:text-3xl text-blue-700">
                  {service.title}
                </h2>

                <p className="text-gray-900 text-md md:text-xl mx-3 mt-2 mb-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* section 4 */}
        <button className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 mx-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 transition-all duration-300 ease-in group-hover:text-transparent group-hover:after:opacity-100 group-hover:after:w-6 group-hover:after:h-6 group-hover:after:bg-white group-hover:after:translate-x-3 group-hover:after:rotate-0 dark:group-hover:after:bg-gray-900 dark:group-hover:after:rotate-180 w-[80%] sm:w-full md:w-[30%] ">
          <span className="text-2xl relative px-5 py-5 transition-all ease-in duration-75 bg-white rounded-md text-black opacity-100 group-hover:opacity-0  w-full">
            Contact Us.
          </span>
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-full bg-white rounded-l-full rotate-90 transition-all duration-300 ease-in opacity-0 group-hover:opacity-100 dark:group-hover:rotate-90 dark:group-hover:opacity-100 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full h-full -rotate-90 text-white bg-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            {/* <div>Give me</div> */}
          </span>
        </button>

        {/* section 5 */}
        <div className="sm:mt-17 mb-6 p-2 mt-[4rem] flex flex-col justify-center items-center w-full">
          <div className="text-center">
            <h2 className="text-2xl px-6 md:text-3xl font-semibold">
              A maintenance solution for every need
            </h2>
            <div className="border-b-2 border-blue-500 mx-auto mt-2 w-80" />
            <div className="text-xl md:text-2xl mt-4 mb-2">
              With a wide range of elevator and escalator maintenance services,
              we’ve got you covered.{" "}
            </div>
          </div>
          <div className="flex flex-wrap justify-around mt-4 mb-6 w-full ">
            {services2.map((service, index) => (
              <div
                key={index}
                className="bg-white hover:scale-105 transition-all delay-200 cursor-pointer m-4 p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] flex flex-col items-center min-h-[20rem] font-semibold text-center"
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full object-cover  mb-4"
                />
                <h2 className="text-2xl md:text-3xl text-blue-700">
                  {service.title}
                </h2>

                <p className="text-gray-900 text-md md:text-xl mx-3 mt-2 mb-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* section 6*/}
        {/* <MaintenanceCarousal/> */}
      </div>
    </>
  );
};

export default Maintenance;
