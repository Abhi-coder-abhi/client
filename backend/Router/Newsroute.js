// routes/news.mjs
import express from "express";
import News from "../Models/NewsModel.js";

const router = express.Router();

router.post("/news", async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/news", async (req, res) => {
  try {
    const { limit = 10, page = 1 } = req.query;

    const parsedLimit = parseInt(limit, 10);
    const parsedPage = parseInt(page, 10);

    // Calculate the skip value based on limit and page
    const skip = (parsedPage - 1) * parsedLimit;

    // Fetch news with pagination
    const news = await News.find().skip(skip).limit(parsedLimit);

    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/news/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Edit news route
router.put("/news/:id", async (req, res) => {
  try {
    const { title, description } = req.body;

    // Find the news by ID and update it
    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true, runValidators: true } // Ensure validators are run
    );

    if (!updatedNews) {
      return res.status(404).json({ error: "News not found" });
    }

    res.json(updatedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a News by ID
router.delete("/news/:id", async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);

    if (!deletedNews) {
      return res.status(404).json({ message: "News not found" });
    }

    res.json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
