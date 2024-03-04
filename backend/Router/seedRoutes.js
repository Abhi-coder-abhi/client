import express from "express";
import Product from "../Models/ProductModel.js";
import Admin from "../Models/AdminModel.js";
import Customer from "../Models/ConsumerModel.js";
import Engineer from "../Models/EngineerModel.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  try {
    // Remove all existing products
    await Product.deleteMany({});

    // Create new products
    const createdProducts = await Product.insertMany(data.products);

    // Remove all existing admins
    await Admin.deleteMany({});

    // Create new admins
    const createdAdmin = await Admin.insertMany(data.admins);

    // Remove all existing admins
    await Customer.deleteMany({});

    // Create new admins
    const createdCustomer = await Customer.insertMany(data.customers);

    // Remove all existing admins
    await Engineer.deleteMany({});

    // Create new admins
    const createdEngineer = await Engineer.insertMany(data.engineers);

    // Send a single response with both results
    res.send({
      createdProducts,
      createdAdmin,
      createdCustomer,
      createdEngineer,
    });
  } catch (error) {
    // Handle errors for both operations
    console.error(error);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }
});

export default seedRouter;
