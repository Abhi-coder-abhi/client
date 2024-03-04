import Esc from "../../assets/img/escalator1.jpg";
import lift1 from "../../assets/img/lift1.jpg";
import lift4 from "../../assets/img/lift4.jpg";
import lift5 from "../../assets/img/lift5.jpg";
import lift7 from "../../assets/img/lift7.jpg";
import lift15 from "../../assets/img/lift15.jpg";

const OurCompany = () => {
  return (
    <>
      <section className="md:mt-2 w-full flex flex-col md:flex-row p-4 pt-28 md:p-8">
        <div className="w-full md:w-[60%] mt-2 md:mt-16 md:order-2">
          <h1 className="text-black font-bold text-4xl md:text-5xl mx-4 md:mx-8 text-center md:text-left">
            About Simsun
          </h1>
          <p className="text-black text-lg md:text-xl mt-4 mx-4 md:mx-8 text-center md:text-left">
            The birth of Simsun Electric was founded in December 2016 after 2
            years of elevator and escalator project installation experience all
            over Rajasthan. The possibilities of SimSun Electric were built
            after leaving the DMRC project in Dec 2014 and started working with
            a small franchise of elevator and escalator energy in Jaipur.
          </p>
          <p className="text-black text-lg md:text-xl mx-4 md:mx-8 text-center md:text-left">
            At that time, we found that everybody is moving on MW and
            large-scale projects. We kept our focus on learning about elevator
            and escalator project work. We started our work as freelancers in
            the industry by doing small works with different franchises in
            rooftop backup or net metering projects. When we observed that the
            elevator and escalator rooftop market in Rajasthan was rapidly
            growing, our ideas became a reality, and Simsun Electric was founded
            in Dec 2016.
          </p>
        </div>
        <div className="mt-8 md:mt-16 w-full md:w-[40%] mx-2 md:mx-4 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-2 md:order-1">
          <div className="flex justify-center items-center">
            <img
              src={Esc}
              alt="Your Alt Text"
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={lift1}
              alt="Your Alt Text"
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={lift4}
              alt="Your Alt Text"
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={lift7}
              alt="Your Alt Text"
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={lift15}
              alt="Your Alt Text"
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={lift5}
              alt="Your Alt Text"
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            />
          </div>
        </div>
      </section>
      <div>
        <div className="m-12 ">
          <div className="qkiflexkaamkare ">
            <div className=" flex flex-col ">
              {/* <div className="imgg ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17124.219485667665!2d88.33768204388784!3d22.576551611280404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02777b6e77a7b1%3A0xc2b5321759b6d987!2sHMP%20House!5e0!3m2!1sen!2sin!4v1686565788904!5m2!1sen!2sin"
                  width={500}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className=""
                />
              </div> */}
              <div className="textinfraa">
                <h2 className="text-4xl">OFFICE LOCATIONS</h2>
                <p className="text-2xl mt-4">
                  Flat No. T-1,104,1st Floor,Tower-1 Plot No. GH o1/A,Sector
                  16C, Exotica Dreamville,Greater Noida, U.P.201203
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardinfra ">
          <div className="qkiflexkaamkare sm:m-16 m-5 ">
            <div className="cardinner">
              {/* <div className="img" style={{ order: 2 }}>
                <img
                  src="./industryimg/exfin presentation  final_page-0005.jpg"
                  alt
                /> */}
              {/* </div> */}
              {/* <div className="textinfra ">
                <h2 className="text-4xl">Our Branches</h2>
                <p className="text-left">
                  We also have our branch office in Ranchi, Aurangabad from
                  where we provide services to the clients
                  <br />
                  <br />
                </p>
                <h3 className="text-2xl font-bold">Aurangabad : </h3>
                <br />
                <p className="text-left translate-x-2 text-xl">
                  Old G. T Road, Malti Complex Above Canara Bank, Aurangabad -
                  824101. (Bihar)

                </p>
                <br />
                <br />
                <h3 className="text-2xl font-bold">Dehri On Sone Branch:</h3>
                <br />
                <p className="text-left translate-x-2 text-xl">
                  Ground Floor, Hari Apartment, Near Hotel Urvashi, Gandhi Nagar,
                  Rohtas - 821307. (Bihar)

                </p>
                <br />
                <br />
                <h3 className="text-2xl font-bold">Ranchi Branch:</h3>
                <br />
                <p className="text-left translate-x-2 text-xl">
                  3rd floor, Apsara Hotel Circular Road, Lalpur Ranchi 834001
                  (Jharkhand)
                </p>
                <br />
                <br />
                <h3 className="text-2xl font-bold">Raniganj Branch:</h3>
                <br />
                <p className="text-left translate-x-2 text-xl">
                  Ramalaya Bhawan, Inside Jayswal Cold Storage Near TDB College
                  Main Gate Raniganj - 713347(WB)
                </p>
                <br />
                <br />
                <p />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCompany;
