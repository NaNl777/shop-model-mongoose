import { Router } from "express";
import { productController } from "../controllers/products.controller.js";

const productRouter = Router();

// admin routes
productRouter.get("/admin", productController.getProductAdmin);
productRouter.post("/admin",  productController.addProductAdmin);
productRouter.delete("/admin/:id", productController.deleteProductAdmin);
productRouter.delete("/admin/:id", productController.updateProductAdmin);

productRouter.get("/", productController.getProduct);
productRouter.get("/categories/:id", productController.getProductByCategory);
productRouter.get("/brands/:id", productController.getProductByBrand);
productRouter.get("/reviews/:id", productController.getProductByReview);
productRouter.patch("/reviews/:id", productController.addReviewByProduct);

export{productRouter}
