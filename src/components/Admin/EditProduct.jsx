// EditProduct.jsx
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    imageUrl: "",
    image: null,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://simsun-backend.onrender.com/api/products/${id}`
        );
        const existingProduct = response.data;

        setProduct({
          name: existingProduct.name,
          description: existingProduct.description,
          price: existingProduct.price,
          category: existingProduct.category,
          imageUrl: existingProduct.imageUrl,
        });
      } catch (error) {
        console.error("Error fetching product:", error.message);
      }
    };

    fetchProduct();
  }, [id]);

  // useEffect(() => {
  //   // Fetch the product details when the component mounts
  //   fetchProductDetails();
  // }, []);

  // const fetchProductDetails = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://simsun-backend.onrender.com/api/products/${id}`
  //     );
  //     setProduct(response.data);
  //   } catch (error) {
  //     console.error("Error fetching product details:", error.message);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      // For handling file input
      setProduct({ ...product, image: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };
  // const handleChange = (e) => {
  //   setProduct({ ...product, [e.target.name]: e.target.value });
  // };

  const handleUpdateProduct = async () => {
    try {
      let imageUrl = product.imageUrl; // Use the existing image URL

      // Check if a new image file is selected
      if (product.image) {
        // Upload the new image file to Cloudinary
        const formData = new FormData();
        formData.append("file", product.image);
        const result = await axios.post(
          "https://simsun-backend.onrender.com/api/products/upload", // Create a new route for uploading files to Cloudinary
          formData
        );

        // Get the Cloudinary URL for the newly uploaded photo
        imageUrl = result.data.imageUrl;
        console.log(imageUrl);
      }

      // Update the product details with the Cloudinary URL
      await axios.put(
        `https://simsun-backend.onrender.com/api/products/${id}`,
        {
          ...product,
          imageUrl,
        }
      );

      toast.success("Product Updated Successfully");
      // Redirect to the admin panel after updating
      navigate("/admin/productList");
    } catch (error) {
      console.error("Error updating product:", error.message);
    }
  };

  // const handleUpdateProduct = async () => {
  //   try {
  //     await axios.put(`https://simsun-backend.onrender.com/api/products/${id}`, product);
  //     // Redirect to the admin panel after updating
  //     navigate("/admin");
  //   } catch (error) {
  //     console.error("Error updating product:", error.message);
  //   }
  // };

  const state = useSelector((state) => state.user);
  useEffect(() => {
    if (!state?.userData?.isAdmin) {
      navigate("/auth/AdminLogin");
    }
  }, [state]);

  return (
    <div className="container mx-auto p-4 pt-28 md:pt-4">
      <h1 className="mt-16 text-3xl flex justify-center font-semibold mb-4">
        Edit Product
      </h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-600">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Product Image:</label>
          <input type="file" id="image" name="image" onChange={handleChange} />
        </div>

        {/* Display the existing image if it exists */}
        {/* {product.imageUrl && (
          <div className="existing-image-container">
            <p>Existing Image:</p>
            <img
              src={product.imageUrl}
              alt="Existing Product"
              className="w-12 h-12 object-cover"
            />
          </div>
        )} */}

        {/* Display the uploaded image preview if a new image is selected */}
        {product.image && (
          <div className="new-image-container">
            <p>New Image Preview:</p>
            <img
              src={URL.createObjectURL(product.image)}
              alt="New Product"
              className="new-image"
            />
          </div>
        )}
        {/* <div className="mb-4">
          <label className="block text-gray-600">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div> */}
        <button
          type="button"
          onClick={handleUpdateProduct}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
