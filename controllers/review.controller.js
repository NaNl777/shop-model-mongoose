import { Review } from "../models/Review.model.js";

const reviewController = {
  addReview: async (req, res) => {
    try {
      const data = await Review.create({
        text: req.body.text,
      });
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  deleteReview: async (req, res) => {
    try {
      const data = await Review.findByIdAndDelete(req.params.id);
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  updateReview: async (req, res) => {
    try {
      const data = await Review.findByIdAndUpdate(req.params.id, req.body);
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  getReview: async (req, res) => {
    try {
      const data = await Review.find({});
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },
};

export{reviewController}