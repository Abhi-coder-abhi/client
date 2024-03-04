import express from "express";
import multer from "multer";
import Product from "../Models/ProductModel.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

const uploadMiddleWare = multer({ dest: "uploads/" });

dotenv.config();

console.log("Cloudinary Configuration:", {
  cloud_name: "dyahywzfs",
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const router = express.Router();

// Get all products
router.get("/list", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all products with pagination
router.get("/", async (req, res) => {
  try {
    const { limit = 20, page = 1 } = req.query;

    const totalProducts = await Product.countDocuments();
    const totalPages = Math.ceil(totalProducts / limit);

    const products = await Product.find()
      .limit(parseInt(limit))
      .skip((page - 1) * limit);

    res.json({ products, totalPages });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define the file upload route
router.post("/upload", uploadMiddleWare.single("file"), async (req, res) => {
  try {
    const { path } = req.file;

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(path);

    // Respond with the Cloudinary URL
    res.status(200).json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post(
  "/submitProduct",
  uploadMiddleWare.single("file"),
  async (req, res) => {
    const { prodName, prodDescp, price, category } = req.body;
    const { path } = req.file;

    try {
      // Upload file to Cloudinary
      const result = await cloudinary.uploader.upload(path);

      // Create a new product with the Cloudinary URL
      const newProduct = new Product({
        name: prodName,
        description: prodDescp, // Make sure description is provided
        price,
        category,
        imageUrl: result.secure_url, // Use the Cloudinary URL
      });

      await newProduct.save();

      res.status(200).json({
        message: "Product added successfully",
        imageUrl: result.secure_url,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Update a product by ID
router.put("/:id", async (req, res) => {
  const { name, description, price, imageUrl, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        imageUrl,
        category,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
