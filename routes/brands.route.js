import { Router } from "express";
import { brandController } from "../controllers/brands.controller.js";
const brandRouter = Router();

// admin routes
brandRouter.get("/admin", brandController.getBrand);
brandRouter.post("/admin", brandController.addBrandByAdmin);
brandRouter.delete("/admin/:id", brandController.deleteByAdmin);
brandRouter.patch("/admin/:id", brandController.updateByAdmin);

export { brandRouter };
