// /* eslint-disable no-undef */

// import express from "express";
// import bcrypt from "bcryptjs";
// import ConsumerModel from "../Models/ConsumerModel.js";
// import EngineerModel from "../Models/EngineerModel.js";
// import AdminModel from "../Models/AdminModel.js";

// const salt = bcrypt.genSaltSync(10);
// const router = express.Router();

// router.get("/getUsers", async (req, res) => {
//   try {
//     const consumers = await ConsumerModel.find({}, "-password");
//     const engineers = await EngineerModel.find({}, "-password");

//     res.json({ consumers, engineers });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Failed to fetch user data" });
//   }
// });

// router.post("/consumerRegister", async (req, res) => {
//   const { userName, fullName, email, password } = req.body;

//   try {
//     await ConsumerModel.create({
//       userName,
//       fullName,
//       email,
//       password: bcrypt.hashSync(password, salt),
//     });

//     res.json({ message: "Registration successful!" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: "Registration failed" });
//   }
// });

// router.post("/EngineerRegister", async (req, res) => {
//   const { userName, fullName, email, password } = req.body;

//   try {
//     await EngineerModel.create({
//       userName,
//       fullName,
//       email,
//       password: bcrypt.hashSync(password, salt),
//     });

//     res.json({ message: "Engineer Registration successful!" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: "Registration failed" });
//   }
// });

// router.post("/adminRegister", async (req, res) => {
//   const { email, password, secretKey } = req.body;

//   if (secretKey !== process.env.SECRET_KEY) {
//     res.json({ message: "Secret key doesn't match" });
//     return; // Stop further execution
//   }

//   try {
//     await AdminModel.create({
//       email,
//       password: bcrypt.hashSync(password, salt),
//     });

//     res.json({ message: "Registration successful!" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: "Registration failed" });
//   }
// });

// export default router;

/* eslint-disable no-undef */

import express from "express";
import bcrypt from "bcryptjs";
import ConsumerModel from "../Models/ConsumerModel.js";
import EngineerModel from "../Models/EngineerModel.js";
import AdminModel from "../Models/AdminModel.js";
import nodemailer from "nodemailer";

const salt = bcrypt.genSaltSync(10);
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

router.get("/getUsers", async (req, res) => {
  try {
    const consumers = await ConsumerModel.find({}, "-password");
    const engineers = await EngineerModel.find({}, "-password");

    res.json({ consumers, engineers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});

router.post("/consumerRegister", async (req, res) => {
  const { userName, fullName, email, password } = req.body;

  try {
    await ConsumerModel.create({
      userName,
      fullName,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    res.json({ message: "Registration successful!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Registration failed" });
  }
});

router.post("/EngineerRegister", async (req, res) => {
  const {
    userName,
    fullName,
    email,
    password,
    phoneNumber,
    experience,
    field,
    // degree,
    certificates,
    whatsappNumber,
    location,
    pinCode,
    address,
    description,
  } = req.body;
  console.log("Request Body:", req.body);

  if (!password) {
    return res.status(400).json({ error: "Password is required." });
  }

  try {
    const engineer = await EngineerModel.create({
      userName,
      fullName,
      email,
      password: bcrypt.hashSync(password, salt),
      phoneNumber,
      experience,
      field,
      // degree: {
      //   data: Buffer.from(degree, "base64"),
      //   contentType: "application/pdf",
      // },
      certificates,
      whatsappNumber,
      location,
      pinCode,
      address,
      description,
    });

    // Notify admin about the new engineer request
    // const adminEmail = process.env.ADMIN_EMAIL;
    // const mailOptions = {
    //   from: process.env.EMAIL_USERNAME,
    //   to: adminEmail,
    //   subject: "New Engineer Registration Request",
    //   text: `Hello Admin,\n\nA new engineer registration request has been received. Please log in to the admin panel to review and take action.`,
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.error("Email notification error:", error);
    //   } else {
    //     console.log("Email sent:", info.response);
    //   }
    // });

    res.json({ message: "Engineer Registration request sent successfully!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Registration request failed" });
  }
});

router.post("/acceptEngineerRequest", async (req, res) => {
  const { engineerId } = req.body;

  try {
    await EngineerModel.findByIdAndUpdate(engineerId, { isEngineer: true });
    res.json({ message: "Engineer request approved successfully!" });

    // Add logic to send an email to the engineer about approval
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to approve engineer request" });
  }
});

router.post("/rejectEngineerRequest", async (req, res) => {
  const { engineerId } = req.body;

  try {
    await EngineerModel.findByIdAndDelete(engineerId);
    res.json({ message: "Engineer request rejected successfully!" });

    // Add logic to send an email to the engineer about rejection
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to reject engineer request" });
  }
});

router.post("/adminRegister", async (req, res) => {
  const { email, password, secretKey } = req.body;

  if (secretKey !== process.env.SECRET_KEY) {
    res.json({ message: "Secret key doesn't match" });
    return; // Stop further execution
  }

  try {
    await AdminModel.create({
      email,
      password: bcrypt.hashSync(password, salt),
    });

    res.json({ message: "Registration successful!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Registration failed" });
  }
});

export default router;