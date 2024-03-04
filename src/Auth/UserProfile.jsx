import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/slices/UserSlice";
import { useSpring, animated } from "react-spring";
import profilebg from "../assets/img/profilebg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [prevmail, setPrevmail] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.userData);
  console.log("this is user", user);

  // Animation for the UserProfile component
  const profileAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const handleEditProfile = () => {
    setPrevmail(user.email); // Set prevmail here
    setEditMode(true);
  };

  const handleUpdateProfile = async () => {
    // let url = "http://localhost:5000/api/customer/editProfile";

    // if (user.isAdmin) {
    //   url = "http://localhost:5000/api/admin/editProfile";
    // } else if (user.isEngineer) {
    //   url = "http://localhost:5000/api/engineer/editProfile";
    // }

    let url = "https://simsun-backend.onrender.com/api/customer/editProfile";

    if (user.isAdmin) {
      url = "https://simsun-backend.onrender.com/api/admin/editProfile";
    } else if (user.isEngineer) {
      url = "https://simsun-backend.onrender.com/api/engineer/editProfile";
    }
    try {
      const response = await axios.put(url, {
        prevmail,
        userName,
        email,
        password,
      });
      console.log(response.data);
      if (response.status == 200 && response.data.success) {
        const json = response.data;
        dispatch(updateUser(json));
        setEditMode(false);
        toast.success("Profile updated successfully!"); // Show success toast
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile. Please try again."); // Show error toast
    }
  };
  const handleCloseForm = () => {
    setEditMode(false);
  };

  return (
    <animated.div style={profileAnimation} className=" w-full">
      <div
        className="md:mt-20 bg-gray-100 min-h-screen w-full pt-28 md:pt-8"
        style={{ backgroundImage: `url(${profilebg})` }}
      >
        <div className="max-w-xs sm:max-w-md md:max-w-3xl mx-auto p-2">
          <div
            className="rounded-lg shadow-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-6"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.45)",
              blur: "15px",
              boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
              font: "1em/1.168 Inter,sans-serif",
            }}
          >
            <div className="col-span-1 p-4">
              <h2 className="text-xl font-semibold mb-6">
                Personal Information
              </h2>
              {user.fullName ? (
                <div className="mb-6">
                  <label className="font-semibold">Full Name</label>
                  <p className="ml-2 text-black">{user.fullName}</p>
                </div>
              ) : null}
              <div className="mb-6">
                <label className="font-semibold">Username:</label>
                <p className="ml-2 text-black">{user.userName}</p>
              </div>
              <div className="mb-6">
                <label className="font-semibold text-black">Email:</label>
                <p className="ml-2 text-black">{user.email}</p>
              </div>

              {user.whatsappNumber ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">
                    Whatsapp Number:
                  </label>
                  <p className="ml-2 text-black">{user.whatsappNumber}</p>
                </div>
              ) : null}

              {user.field ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">Field:</label>
                  <p className="ml-2 text-black">{user.field}</p>
                </div>
              ) : null}

              {user.experience ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">
                    Experience:
                  </label>
                  <p className="ml-2 text-black">{user.experience}</p>
                </div>
              ) : null}

              {user.location ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">Location:</label>
                  <p className="ml-2 text-black">{user.location}</p>
                </div>
              ) : null}

              {user.pinCode ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">PinCode:</label>
                  <p className="ml-2 text-black">{user.pinCode}</p>
                </div>
              ) : null}

              {user.address ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">Address:</label>
                  <p className="ml-2 text-black">{user.address}</p>
                </div>
              ) : null}
            </div>
            <div className="col-span-1 p-4">
              <h2 className="text-xl font-semibold mb-6">
                Company Information
              </h2>
              <div className="mb-6">
                <label className="font-semibold text-black">Company:</label>
                <p className="ml-2 text-black">Simsun</p>
              </div>
              <div className="mb-6">
                <label className="font-semibold text-black">
                  Company Email:
                </label>
                <p className="ml-2 text-black">simsunelectricwork@gmail.com</p>
              </div>
              {user.address ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">Address:</label>
                  <p className="ml-2 text-black">{user.address}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="max-w-xs sm:max-w-md md:max-w-3xl mx-auto p-2 flex flex-col items-center">
          {!editMode && (
            <div
              className="rounded-lg shadow-lg p-4 text-white cursor-pointer bg-red-500 hover:bg-red-600 mb-4"
              style={{
                boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
                fontFamily: "Inter, sans-serif",
              }}
              onClick={handleEditProfile}
            >
              Update Profile
            </div>
          )}
          {editMode && (
            <div className="container bg-white shadow-md rounded-lg px-4 pt-6 pb-8 flex flex-col items-center">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mb-3 rounded self-end"
                onClick={handleCloseForm}
              >
                Close
              </button>
              <input
                type="text"
                className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Updated Username"
              />
              <input
                type="email" // Changed type to email
                className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email} // Assuming you have state for email as well
                onChange={(e) => setEmail(e.target.value)} // Assuming you have a setEmail function for email
                placeholder="Updated Email" // Changed placeholder
              />
              <input
                type="password"
                className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Updated Password"
              />
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleUpdateProfile}
              >
                Update Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
};

export default UserProfile;
