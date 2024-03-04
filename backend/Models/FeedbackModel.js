import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  // Example schema fields
  feedbackText: {
    type: String,
    required: true, // This indicates that the field is required
  },
  // Add other fields as needed
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
