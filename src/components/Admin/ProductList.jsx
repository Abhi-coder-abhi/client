// AdminPanel.jsx
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, []);

  const state = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.userData?.isAdmin) {
      navigate("/auth/AdminLogin");
    }
  }, [state]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://simsun-backend.onrender.com/api/products/list"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(
        `https://simsun-backend.onrender.com/api/products/${productId}`
      );
      // Refresh the product list after deletion
      fetchProducts();
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 pt-28 md:pt-4">
      <h1 className="mt-20 text-3xl font-semibold mb-4">Admin Panel</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      {products.loading && <p>Loading...</p>}
      {products.error && <p>Error: {products.error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.description}</td>
                <td className="py-2 px-4 border-b">{product.price}</td>
                <td className="py-2 px-4 border-b">{product.category}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    <Link
                      to={`/admin/edit/${product._id}`}
                      className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="bg-red-500 text-white py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
