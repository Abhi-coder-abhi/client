/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import seedRouter from "./Router/seedRoutes.js";
import loginRouter from "./Router/Loginroute.js";
import registerRouter from "./Router/Registerroute.js";
import productRoutes from "./Router/Productroute.js";
import newsroute from "./Router/Newsroute.js";
import feedbackRouter from "./Router/Feedbackroute.js";
import cartRoutes from "./Router/Cartroute.js";
import enquiryRoute from "./Router/EnquiryRoute.js";
// import {paymentRoute} from "./Router/paymentRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// const paymenttRoute = paymentoute;

// app.use("/", paymentRoute);

app.use("/api/seed", seedRouter);
app.use("/api/feedbacks", feedbackRouter);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/enquiry", enquiryRoute);
app.use("/api", loginRouter);
app.use("/api", registerRouter);
app.use("/", newsroute);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
