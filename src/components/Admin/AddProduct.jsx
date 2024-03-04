import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productCategories from "./productCategories";
const AddProduct = () => {
  const [prodName, setProdName] = useState("");
  const [prodDescp, setProdDescp] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(5);
  const [file, setFile] = useState();
  const [category, setCategory] = useState("Lift");

  const state = useSelector((state) => state.user);
  console.log(state?.userData?.isAdmin);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Current state:", state);
    console.log("Checking isAdmin:", state?.isAdmin);

    if (!state?.userData?.isAdmin) {
      console.log("Redirecting to /auth/AdminLogin");
      navigate("/auth/AdminLogin");
    }
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prodName || !prodDescp || !price || !file || !category) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file); // Assuming 'file' is the selected file
      formData.append("prodName", prodName);
      formData.append("prodDescp", prodDescp);
      formData.append("price", price);
      formData.append("rating", rating);
      formData.append("category", category);

      const res = await axios.post(
        "https://simsun-backend.onrender.com/api/products/submitProduct",
        // "http://localhost:5000/api/products/submitProduct",
        formData,
        {
          headers: {
            "x-device-id": "stuff",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Log the entire response for debugging
      console.log("Response from server:", res);

      // Check the response status
      if (res.status === 200) {
        console.log("Product added successfully!");
        toast.success("Product added successfully");
        // Optionally, redirect the user or perform other actions.

        // Reset all input fields to their initial state
        setProdName("");
        setProdDescp("");
        setPrice(0);
        setRating(5);
        setFile(null);
        setCategory("Lift");
      } else {
        console.error("Error adding product. Server response:", res);
        toast.error("Error adding Product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding Product");
    }
  };

  return (
    <>
      <div className="md:mt-16 flex justify-center items-center p-8 w-full  bg-violet-700 pt-28 md:pt-4 ">
        <form className=" max-w-lg  bg-gray-200  rounded-md py-10 px-8">
          <h1 className="flex justify-center text-3xl mb-4">Add Product</h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase text-black tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Product
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                value={prodName}
                onChange={(e) => setProdName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block text-black uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Price (in ₹)
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 flex-col">
            <label className="block text-black uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Product Description
            </label>
            <div className=" block ">
              <textarea
                className="w-full p-2 rounded-lg"
                cols="30"
                rows="5"
                value={prodDescp}
                onChange={(e) => setProdDescp(e.target.value)}
              ></textarea>
            </div>
            <input
              className="block mt-5 p-4 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2 ">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 ">
              <label
                className="block text-black uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Category
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {productCategories.map((productCategory) => (
                    <option
                      key={productCategory.id}
                      value={productCategory.name}
                    >
                      {productCategory.name}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block text-black uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Rating (1-5)
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              className="focus:outline-none text-white bg-violet-700 hover:bg-violet-800 focus:violet-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
              onClick={handleSubmit}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
