import { Router } from "express";
import { reviewController } from "../controllers/review.controller.js";
const reviewRouter = Router();

// admin routes
reviewRouter.get("/admin", reviewController.getReview);
reviewRouter.post("/admin", reviewController.addReview);
reviewRouter.delete("/admin/:id", reviewController.deleteReview);
reviewRouter.patch("/admin/:id", reviewController.updateReview);

export{reviewRouter}