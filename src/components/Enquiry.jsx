import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemAsync, updateQuantity } from "../store/slices/CartSlices";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faL } from "@fortawesome/free-solid-svg-icons";
function Enquiry() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState([]);
  const userId = useSelector((state) => state.user.userData._id);
  const Id = useSelector((state) => state.user.userData);
  // console.log("heelo ", Id);
  useEffect(() => {
    fetchCartData();
  }, [userId]);

  const fetchCartData = async () => {
    try {
      // const response = await fetch(`http://localhost:5000/api/Cart/${userId}`);
      const response = await fetch(
        `https://simsun-backend.onrender.com/api/Cart/${userId}`
      );
      // console.log("this is res: ", response);
      // console.log("this is userid", userId);
      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data = await response.json();
      console.log("this is my data items: ", data);
      console.log("this is data we r fetching:", data.items);
      setCartData(data.items);

      // addToEnquiry(data, Id.fullName, Id.email, Id.address);
      console.log("this is cart data", cartData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowForm(false);
    }
  };

  const handleQuantityChange = async (id, newQuantity) => {
    try {
      // dispatch(updateQuantity({ id, quantity: newQuantity }));

      await axios.put(
        `https://simsun-backend.onrender.com/api/cart/updateQuantity/${userId}/${id}`,
        // `http://localhost:5000/api/cart/updateQuantity/${userId}/${id}`,
        {
          quantity: newQuantity,
        }
      );

      // Update the local cart data state
      setCartData((prevCartData) =>
        prevCartData.map((item) =>
          item._id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `https://simsun-backend.onrender.com/api/Cart/delete/${userId}/${productId}`
        // `http://localhost:5000/api/Cart/delete/${userId}/${productId}`
      );
      console.log(response.data); // Log response data if needed
      dispatch(removeItemAsync(productId)); // Dispatch action to remove item from local state
      // Update cartData in UI (if needed)
      setCartData(
        (prev) => prev.filter((item) => item._id !== productId) // Update the filter condition
      );
    } catch (error) {
      console.error("Error deleting item:", error);
      // Handle error, show message to user, etc.
    }
  };

  const subTotal = cartData.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // const subTotal = 120;

  const discount = 0; // You can add discount logic here if needed
  const gst = 0.18 * subTotal;
  const totalAmount = subTotal + gst - discount;

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [enquiry, setEnquiry] = useState("");

  const handleEnquiryClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setShowForm(false);

    try {
      const responses = await fetch(
        `https://simsun-backend.onrender.com/api/Cart/${userId}`
      );
      // const responses = await fetch(`http://localhost:5000/api/Cart/${userId}`);
      if (!responses.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data = await responses.json();
      console.log("userId", userId);
      console.log("Data: ", data);

      const response = await axios.post(
        "https://simsun-backend.onrender.com/api/Cart/transferToEnquiry",
        // "http://localhost:5000/api/Cart/transferToEnquiry",
        { data, name, email, phoneNumber, address, enquiry, userId }
      );

      console.log("Form submitted successfully:", response.data);
      toast.success("Form submitted successfully");

      // Optionally, you can reset the form fields after successful submission
      setName("");
      setPhoneNumber("");
      setEmail("");
      setAddress("");
      setEnquiry("");

      sendEmail({ data, name, email, phoneNumber, address, enquiry, userId }); // Delete the array of items from the cart

      // Delete the array of items from the cart
      await axios.delete(
        `https://simsun-backend.onrender.com/api/Cart/deleteItems/${userId}`
        // `http://localhost:5000/api/Cart/deleteItems/${userId}`
      );
      console.log("Items array deleted from cart successfully");
      fetchCartData();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const sendEmail = async (enq) => {
    try {
      // Make HTTP POST request to your backend route for sending emails
      const response = await axios.post(
        `https://simsun-backend.onrender.com/api/cart/sendEmail/${userId}`,
        // `http://localhost:5000/api/cart/sendEmail/${userId}`,
        {
          userId: "user_id_here",
          ...enq,
        }
      );
      console.log(response.data);
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error sending email: ", error);
      toast.error("Error sending email");
    }
  };

  return (
    <div className="md:mt-16 bg-gradient-to-b from-blue-200  to-blue-400 min-h-screen py-10 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {showForm && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
            <form
              ref={wrapperRef}
              // onSubmit={handleFormSubmit}
              onSubmit={handleFormSubmit}
              className="bg-white w-[80%] md:w-[50%] lg:w-[40%] h-[50%] flex flex-col items-center justify-around  p-8 rounded-lg"
            >
              {/* Form fields */}
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="mb-4 h-[3rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
              />
              <input
                type="tel"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mb-4 h-[3rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone Number"
                required
              />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 h-[3rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              />
              <input
                type="Address"
                onChange={(e) => setAddress(e.target.value)}
                className="mb-4 h-[3rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Address"
                required
              />
              <input
                type="text"
                onChange={(e) => setEnquiry(e.target.value)}
                className="mb-4 h-[3rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enquiry Details"
                required
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        )}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Products Enquiry
        </h1>
        <div className="text-white h-full w-full xl:flex">
          <div className="text-white xl:w-[60%] p-4">
            <div className="flex justify-between items-center px-2">
              <div className="text-black font-bold text-xl">
                Items -{cartData.length}
                {/* {console.log("heelo", cartData)} */}
              </div>
            </div>

            <div className="md:grid grid-cols-3 gap-4 flex flex-col">
              {cartData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex ion justify-between mr-4">
                    <img
                      className="p-8 rounded-t-lg w-32 h-32"
                      src={item.image}
                      alt={item.name}
                    />
                    <button
                      className="bg-red-500 py-2 px-4 mt-10 rounded h-12"
                      onClick={() => handleDelete(item._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    </a>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {item.price}
                      </span>
                      {/* Check if item.quantity is a valid number */}
                      {typeof item.quantity === "number" &&
                        item.quantity > 0 && (
                          <div className="flex items-center space-x-2">
                            <button
                              className="text-gray-600 dark:text-white"
                              onClick={() =>
                                handleQuantityChange(
                                  item._id,
                                  item.quantity - 1
                                )
                              }
                            >
                              <i className="fas fa-minus-circle"></i>
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="text-gray-600 dark:text-white"
                              onClick={() =>
                                handleQuantityChange(
                                  item._id,
                                  item.quantity + 1
                                )
                              }
                            >
                              <i className="fas fa-plus-circle"></i>
                            </button>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 text-white max-h-[25rem] rounded-md bg-slate-800 xl:w-[34%] p-5 space-y-3  xl:translate-x-14 xl:translate-y-8 ">
            <div className="flex items-center p-2 text-2xl font-semibold">
              Bill Details
            </div>
            <div className="flex justify-between items-center p-2">
              Subtotal
              <span className="text-yellow-700">₹{subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              Total Discount
              <span className="text-red-500">-₹{discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              GST@18%
              <span className="text-green-500">₹{gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              Total Amount
              <span className="text-yellow-700">₹{totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={handleEnquiryClick}
              >
                Enquiry Products
              </button>
            </div>

            {/* <div className="flex justify-between items-center p-2">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[58%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Coupon Code"
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded hidden xl:block w-[40%]">
                  Apply
                </button>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
