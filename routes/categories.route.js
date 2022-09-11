import { Router } from "express";
import { categoryController } from "../controllers/categories.controller.js";
const categoryRouter = Router();

// admin routes
categoryRouter.get("/admin", categoryController.getCategoryByAdmin);
categoryRouter.post("/admin", categoryController.addCategoryByAdmin);
categoryRouter.delete("/admin/:id", categoryController.deleteCategoryByAdmin);
categoryRouter.patch("/admin/:id", categoryController.updateCategoryByAdmmin);

export {categoryRouter};
