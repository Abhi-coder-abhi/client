import Cart from "../Models/CartModel.js";
import Enquiry from "../Models/EnquiryModel.js";
import express from "express";

const router = express.Router();

router.get("/allInquiry/:id", async (req, res) => {
  try {
    // const userId = req.params.id;
    // console.log(userId);
    const EnquiryBy = await Cart.find().populate("items.productId");
    const previousInquiries = await Enquiry.find().populate("items.productId");
    // Respond with the fetched inquiries
    res.status(200).json({ previousInquiries, EnquiryBy });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const userId = req.params.id;
//     // console.log("id in backend", userId);
//     const cart = await Cart.findOne({ userId }, { maxTimeMS: 20000 }).populate(
//       "items"
//     );
//     // console.log("cart data:", cart);
//     res.json(cart);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.get("/prevEnquiry/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("User ID:", userId);

    // Assuming you have a model named Enquiry to represent previous inquiries
    // Fetch previous inquiries based on the user ID
    const previousInquiries = await Enquiry.find({ userId }).populate(
      "items.productId"
    );
    // console.log("this is previous Inquiries", previousInquiries);
    // Respond with the fetched inquiries
    res.status(200).json(previousInquiries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// // Route to transfer data from Cart to Enquiry
// router.post("/transferToEnquiry/:userId", async (req, res) => {
//   const userId = req.params.userId;

//   try {
//     // Find the cart data for the user
//     const cart = await Cart.findOne({ userId }).populate("items.productId");

//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     // Extract data from cart to create an Enquiry object
//     const enquiryData = {
//       userId: cart.userId,
//       items: cart.items,
//       name: cart.name,
//       phone: cart.phone,
//       email: cart.email,
//       EnquiryDetails: cart.EnquiryDetails,
//       address: cart.address,
//     };

//     // Create a new Enquiry object using the extracted data
//     const enquiry = new Enquiry(enquiryData);

//     // Save the Enquiry object to the Enquiry model
//     await enquiry.save();

//     res.status(201).json(enquiry);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

export default router;
