import express from "express";
import Feedback from "../Models/FeedbackModel.js";

const router = express.Router();

// Get all feedbacks
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// In your server route handling POST requests
router.post("/", async (req, res) => {
  try {
    console.log("Received feedback:", req.body);

    // Validate data before saving
    const newFeedback = new Feedback(req.body);
    const validationError = newFeedback.validateSync();

    if (validationError) {
      console.error("Validation error:", validationError.errors);
      return res
        .status(400)
        .json({ error: "Validation Error", details: validationError.errors });
    }

    // Save feedback if validation passes
    await newFeedback.save();
    res.status(201).json({ success: true, feedback: newFeedback });
  } catch (error) {
    console.error("Error processing feedback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete feedback by id
router.delete("/:id", async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
