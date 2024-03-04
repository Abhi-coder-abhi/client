import React from "react";
import BackgroundImg from "../../assets/img/lift2.jpg";
import monte from "../../assets/img/monte.jpg";

const EscalatorAutowalkModernization = () => {
  return (
    <>
      <div className="mt-0 md:mt-16  flex justify-center items-center  flex-col pt-20 md:pt-4">
        {/* section 1 start */}
        <div className=" w-full h-[35rem] mb-2">
          <div className=" min-h-screen ">
            <div
              className="w-full aspect-video sm:max-h-[35rem] h-[35rem]"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${monte})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col  items-center lg:mt-1">
              <div className="mx-1 p-7 rounded-lg shadow-lg text-center bg-transparent  flex justify-center items-center flex-col md:-translate-y-44 sm:-translate-y-24 -translate-y-10 ">
                <h1 className="text-[1.3rem] md:text-[3.2rem] lg:text-[4rem] font-semibold mt-[14rem] md:mt-[18rem] lg:mt-[20rem] text-white w-full">
                  ESCALATOR MODERNIZATION
                </h1>
                <p className="mt-10 text-[0.85rem] px-6 md:text-[1.4rem] text-white">
                  If you're starting to face problems with your escalators, our
                  modernization solutions will increase their lifespan, giving
                  you the flexibility of replacing the entire installation or
                  just individual components. This will ensure your escalators
                  comply with the latest standards and are as energy efficient,
                  safe, and reliable as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* section 1 ends */}

        {/* section 2 start */}
        <div className="sm:mt-7 mt-11 flex flex-col justify-center items-center w-full">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">
              Why modernize with SIMSUN?
            </h2>
            <div className="border-b-2 border-blue-500 mx-auto mt-2 w-80" />
          </div>
          <div className="flex flex-wrap justify-around mt-4 mb-6 w-full">
            <div className="bg-white m-4 p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] flex  items-center justify-around flex-col min-h-[15rem] font-semibold text-center">
              <h2 className="text-6xl mb-8">1</h2>
              <div className=" sm:text-3xl mb-4">
                AN INVESTMENT THAT PAYS OFF
              </div>
              <p className="text-black">
                SIMSUN escalator modernization improves safety, reliability,
                accessibility, and visual appearance, while also lowering energy
                costs.
              </p>
            </div>
            <div className="bg-white m-4 p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] flex  items-center justify-around flex-col min-h-[15rem] font-semibold text-center">
              <h2 className="text-6xl mb-8">2</h2>
              <div className=" sm:text-3xl mb-4">HAPPIER BUILDING USERS</div>
              <p className="text-black">
                Update escalator safety features, reliability, accessibility,
                and comfort with our escaltor modernization solutions.
              </p>
            </div>
            <div className="bg-white m-4 p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] flex  items-center justify-around flex-col min-h-[15rem] font-semibold text-center">
              <h2 className="text-6xl mb-8">3</h2>
              <div className=" sm:text-3xl mb-4">
                A HASSLE-FREE INSTALLATION PROCESS
              </div>
              <p className="text-black">
                Our professionally managed escalator modernization process
                minimizes disturbance to tenants and visitors.
              </p>
            </div>
          </div>
        </div>

        {/* section 2 end */}

        {/* section 3 start */}
        <div className=" w-full sm:h-[40rem] h-[60rem]">
          <div className="relative min-h-screen">
            <div className="w-full sm:max-h-[40rem] h-[60rem]  bg-[#202b35]" />
            <div className="mt-16 absolute inset-0 flex flex-col items-center">
              <div className="  p-4 rounded-lg md:shadow-white shadow-sm text-center bg-transparent  flex justify-center items-center flex-col md:-translate-y-44 sm:-translate-y-24 -translate-y-10 sm:w-4/5 w-full">
                <h2 className="sm:text-4xl font-semibold p-[4rem] md:mt-[8rem] px-3 text-white md:text-3xl text-3xl w-full mb-10">
                  OUR ESCALATOR MODERNIZATION SOLUTIONS
                </h2>
                <div className="  bg-white   min-w-full flex flex-col sm:flex-row gap-4 sm:gap-0">
                  <div className="border  p-10 hover:bg-blue-500 hover:text-white flex-1 ">
                    <div className=" ">
                      <h2 className=" text-4xl">Full Replacement</h2>
                    </div>
                    <div className="text-2xl px-1 my-4 ">
                      Replace the entire installation, including or excluding
                      the truss.
                    </div>
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className=" h-12 w-12    "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="border  p-10 hover:bg-blue-500 hover:text-white flex-1 ">
                    <div className=" ">
                      <h2 className=" text-4xl">Modular Moderinazation</h2>
                    </div>
                    <div className="text-2xl my-4 ">
                      Replace individual components or complete systems.
                    </div>
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className=" h-12 w-12    "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 3 end */}

        {/* section 4 start  */}
        <div className="relative w-full sm:h-[40rem] h-[55rem] mt-[10rem] sm:mt-0">
          <div className="relative min-h-screen">
            <div className=" bg-[#202b35] w-full sm:max-h-[35rem] h-[50rem]" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className="  p-4 rounded-lg shadow-lg text-center bg-transparent  flex justify-center items-center flex-col md:-translate-y-44 sm:-translate-y-24 -translate-y-10 sm:w-4/5 w-full  bg-white">
                <h2 className="sm:text-4xl font-semibold p-4 text-[1.6rem] max-w-full mb-10 text-black">
                  Tools and Downloads
                </h2>
                <div className="  bg-white min-w-full flex flex-col sm:flex-row gap-4 sm:gap-0">
                  <div className="border hover:border-2 hover:border-blue-500  p-10  flex-1 ">
                    <div className="text-2xl my-4 text-left flex items-center">
                      ESCALATOR PLANNER
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className=" h-6 w-6    "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      Escalator Planner helps you select the right product as
                      well as create detailed specifications, BIM equipment
                      models and CAD drawings for preliminary planning.
                    </div>
                  </div>
                  <div className=" border hover:border-2  hover:border-fuchsia-500  p-10   flex-1 ">
                    <div className="text-2xl my-4 text-left flex items-center">
                      SIMSUN ESCALATOR INFO PACK
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className=" h-6 w-6    "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      Includes all the information you will need in order to
                      plan an escalator or autowalk.
                    </div>
                  </div>
                </div>
                {/* section 5 start */}

                {/* section 5 end */}
              </div>
            </div>
          </div>
        </div>
        {/* section 4 end */}

        {/* section 6 start */}
        <div className="sm:mt-5 mt-3 flex flex-col justify-center items-center w-full">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
              How can we help you?
            </h2>
            <div className="border-b-2 border-blue-500 mx-auto mt-2 w-80%" />
          </div>
          <div className="flex flex-wrap justify-around mt-4  w-full">
            <div className="bg-white m-4 p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] hover:transform transition ease-in-out delay-120 hover:-translate-y-2 hover:scale-110 duration-300 flex  items-center justify-around flex-col min-h-[15rem] font-semibold">
              <h2 className="text-3xl text-blue-700">PLANNING</h2>

              <div className="border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-28 h-28"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-white m-4 p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] transition ease-in-out delay-120 hover:-translate-y-2 hover:scale-110 duration-300 flex  items-center justify-around flex-col min-h-[15rem] font-semibold">
              <h2 className="text-3xl text-blue-700">INSTALLATION</h2>

              <div className="border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-28 h-28"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-white m-4 p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] transition ease-in-out delay-120 hover:-translate-y-2 hover:scale-110 duration-300 flex  items-center justify-around flex-col min-h-[15rem] font-semibold">
              <h2 className="text-3xl text-blue-700">COMPLETION</h2>

              <div className="border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-28 h-28"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* section 6 end */}
      </div>
      {/* section 7 start */}
      <div className="  flex flex-col justify-center items-center ">
        <button className="mt-[3rem] relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 transition-all duration-300 ease-in group-hover:text-transparent group-hover:after:opacity-100 group-hover:after:w-6 group-hover:after:h-6 group-hover:after:bg-white group-hover:after:translate-x-3 group-hover:after:rotate-0 dark:group-hover:after:bg-gray-900 dark:group-hover:after:rotate-180 w-[80%] sm:w-full md:w-[40%]">
          <span className="sm:text-2xl text-xl relative px-10 py-5 transition-all ease-in duration-75 bg-white rounded-md text-black opacity-100 group-hover:opacity-0  w-full">
            Read more about our moderinazation process.
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
          </span>
        </button>
        <div className="mt-8 text-xl sm:text-3xl mb-2 ">
          Benefits of escalator modernization
        </div>
        <div className="border-4 rounded-xl border-gray-500 w-2/3 sm:w-[20%]"></div>
        <div className="border-2 flex justify-center items-center text-center mt-9 md:mt-8 p-4 sm:w-2/3 w-[90%] text-[14px] mb-20">
          Escalator modernization ensures that your escalators continue to be
          energy efficient, reliable, and up to date with the latest escalator
          safety features. The truss may last as long as your building, but it
          is important to consider escalator modernization because chain
          components and drive components can wear and become outdated. Autowalk
          modernization also ensures that steps, balustrades, and lighting
          maintain a fresh, modern appearance.
        </div>
      </div>
      {/* section 7 end */}
    </>
  );
};

export default EscalatorAutowalkModernization;
