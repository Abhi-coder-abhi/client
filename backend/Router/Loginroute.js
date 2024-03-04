/* eslint-disable no-undef */
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ConsumerModel from "../Models/ConsumerModel.js";
import EngineerModel from "../Models/EngineerModel.js";
import AdminModel from "../Models/AdminModel.js";

const router = express.Router();

router.put("/admin/editProfile", async (req, res) => {
  try {
    const { prevmail, userName, email, password } = req.body;

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = await AdminModel.findOneAndUpdate(
      { email: prevmail },
      { userName, email, password: hashedPassword },
      { new: true } // This option makes the method return the updated document
    );

    // console.log(email);
    console.log(userData);

    // Check if a document was updated
    if (userData) {
      // res.status(200).json({ message: "Profile updated successfully" });
      return res.json({ success: true, userData });
    } else {
      // Send an error message back to the client
      res.status(400).json({ message: "Email not found" });
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Error updating profile" });
  }
});

router.put("/engineer/editProfile", async (req, res) => {
  try {
    const { prevmail, userName, email, password } = req.body;

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = await EngineerModel.findOneAndUpdate(
      { email: prevmail },
      { userName, email, password: hashedPassword },
      { new: true } // This option makes the method return the updated document
    );

    // console.log(email);
    console.log(userData);

    // Check if a document was updated
    if (userData) {
      // res.status(200).json({ message: "Profile updated successfully" });
      return res.json({ success: true, userData });
    } else {
      // Send an error message back to the client
      res.status(400).json({ message: "Email not found" });
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Error updating profile" });
  }
});

router.put("/customer/editProfile", async (req, res) => {
  try {
    const { prevmail, userName, email, password } = req.body;

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = await ConsumerModel.findOneAndUpdate(
      { email: prevmail },
      { userName, email, password: hashedPassword },
      { new: true } // This option makes the method return the updated document
    );

    // console.log(email);
    console.log(userData);

    // Check if a document was updated
    if (userData) {
      // res.status(200).json({ message: "Profile updated successfully" });
      return res.json({ success: true, userData });
    } else {
      // Send an error message back to the client
      res.status(400).json({ message: "Email not found" });
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Error updating profile" });
  }
});

router.post("/consumerLogin", async (req, res) => {
  const KEY = process.env.KEY;
  const email = req.body.email;

  try {
    const userData = await ConsumerModel.findOne({ email });

    if (!userData) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter the valid Email" });
    }

    const confirmpassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!confirmpassword) {
      return res.status(400).json({
        success: false,
        message: "Please Enter the valid Email or Password",
      });
    }

    const data = {
      user: {
        id: userData.id,
      },
    };

    const authToken = jwt.sign(data, KEY, {
      expiresIn: "7d",
    });
    return res.json({ success: true, authToken, userData });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

router.post("/engineerLogin", async (req, res) => {
  const KEY = process.env.KEY;
  const email = req.body.email;

  try {
    const userData = await EngineerModel.findOne({ email });

    if (!userData) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter the valid Email" });
    }

    const confirmpassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!confirmpassword) {
      return res.status(400).json({
        success: false,
        message: "Please Enter the valid Email or Password",
      });
    }

    const data = {
      user: {
        id: userData.id,
      },
    };

    const authToken = jwt.sign(data, KEY, {
      expiresIn: "7d",
    });
    return res.json({ success: true, authToken, userData });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

router.post("/adminLogin", async (req, res) => {
  const KEY = process.env.KEY;
  const email = req.body.email;
  const isAdmin = req.body.isAdmin;

  try {
    const userData = await AdminModel.findOne({ email });

    if (!userData) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter the valid Email" });
    }

    const confirmpassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!confirmpassword) {
      return res.status(400).json({
        success: false,
        message: "Please Enter the valid Email or Password",
      });
    }

    const data = {
      user: {
        id: userData.id,
        isAdmin,
      },
    };

    const authToken = jwt.sign(data, KEY, {
      expiresIn: "7d",
    });
    return res.json({ success: true, authToken, userData, isAdmin });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
