import { Link } from "react-router-dom";
import Esc from "../../assets/img/escalator1.jpg";
import founder from "../../assets/img/swaran.jpg";
import { useSpring, animated } from "react-spring";

const teamMembers = [
  {
    id: 1,
    name: "Swaranjeet Singh",
    position: "Founder",
    image: founder,
    social: [
      { id: 1, icon: "twitter", link: "#" },
      { id: 2, icon: "linkedin", link: "#" },
      { id: 3, icon: "github", link: "#" },
      { id: 4, icon: "mail", link: "#" },
    ],
  },
  {
    id: 2,
    name: "Archita Singh Parmar",
    position: "Co Founder",
    image: Esc,
    social: [
      { id: 1, icon: "twitter", link: "#" },
      { id: 2, icon: "linkedin", link: "#" },
      { id: 3, icon: "github", link: "#" },
      { id: 4, icon: "mail", link: "#" },
    ],
  },
  {
    id: 3,
    name: "John 3",
    position: "Software Engineer",
    image: Esc,
    social: [
      { id: 1, icon: "twitter", link: "#" },
      { id: 2, icon: "linkedin", link: "#" },
      { id: 3, icon: "github", link: "#" },
      { id: 4, icon: "mail", link: "#" },
    ],
  },
  {
    id: 4,
    name: "Name",
    position: "Software Engineer",
    image: "profile-img-1.png",
    social: [
      { id: 1, icon: "twitter", link: "#" },
      { id: 2, icon: "linkedin", link: "#" },
      { id: 3, icon: "github", link: "#" },
      { id: 4, icon: "mail", link: "#" },
    ],
  },

  {
    id: 5,
    name: "Name",
    position: "Software Engineer",
    image: "profile-img-1.png",
    social: [
      { id: 1, icon: "twitter", link: "#" },
      { id: 2, icon: "linkedin", link: "#" },
      { id: 3, icon: "github", link: "#" },
      { id: 4, icon: "mail", link: "#" },
    ],
  },
  {
    id: 6,
    name: "Name",
    position: "Software Engineer",
    image: "profile-img-1.png",
    social: [
      { id: 1, icon: "twitter", link: "#" },
      { id: 2, icon: "linkedin", link: "#" },
      { id: 3, icon: "github", link: "#" },
      { id: 4, icon: "mail", link: "#" },
    ],
  },

  // Add more team members as needed
];

const OurTeam = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  const getSocialIcon = (icon) => {
    switch (icon) {
      case "twitter":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10"
          >
            <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
          </svg>
        );
      case "linkedin":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10"
          >
            <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
          </svg>
        );
      case "github":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10"
          >
            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
          </svg>
        );
      case "mail":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10"
          >
            <path d="M2 7.42v14.172l7.086-7.086zM3.408 6l8.971 8.971c1.133 1.133 3.109 1.133 4.242 0L25.592 6H3.408z"></path>
            <path d="M18.035 16.385c-.943.944-2.199 1.465-3.535 1.465s-2.592-.521-3.535-1.465l-.465-.465L3.42 23h22.16l-7.08-7.08-.465.465zM19.914 14.506L27 21.592V7.42z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <animated.section
        style={fadeIn}
        className="bg-purple-100 mt-0 md:mt-16  min-h-screen  p-4"
      >
        <div className="team1 ">
          <h1 className="text-4xl font-semibold text-center mb-2 mt-4 text-purple-800">
            Our Team
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="img-container">
                <img
                  src={member.image}
                  alt={`Team member ${member.name}`}
                  className="rounded-full mx-auto mb-4 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg w-40"
                />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-2xl text-black font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-2xl text-black mb-4">{member.position}</p>
              </div>
              <div className="flex justify-center space-x-4">
                {member.social.map((socialItem) => (
                  <Link
                    key={socialItem.id}
                    to={socialItem.link}
                    className="text-black hover:text-purple-500"
                  >
                    {getSocialIcon(socialItem.icon)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </animated.section>
    </>
  );
};

export default OurTeam;
