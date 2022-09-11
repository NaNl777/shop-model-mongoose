import { Router } from "express";
import { userController } from "../controllers/users.controller.js";
const userRouter = Router();

// admin routes
userRouter.get("/admin", userController.getUser);
userRouter.post("/admin", userController.addUser);
userRouter.delete("/admin/:id", userController.deleteUser);

// user routes
userRouter.patch("/add/:id", userController.addProductByBasket);
userRouter.patch("/delete/:id", userController.deleteProductByBasket);
userRouter.patch("/buy/:id", userController.buyProductForUser);
userRouter.patch("/wallet/:id", userController.addMoneyWallet);

export{userRouter}
