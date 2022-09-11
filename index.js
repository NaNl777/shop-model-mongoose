import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.route.js";
import { brandRouter } from "./routes/brands.route.js";
import { reviewRouter } from "./routes/reviews.route.js";
import { categoryRouter } from "./routes/categories.route.js";
import { productRouter } from "./routes/products.route.js";


const dbUrl = "mongodb+srv://zelim:Ru95@cluster0.09gco.mongodb.net/shopOnline";
const port = 3015;
const app = express();

app.use(express.json());
app.use('/users',userRouter);
app.use('/brands', brandRouter);
app.use('/review', reviewRouter);
app.use('/category',categoryRouter)
app.use('/product', productRouter);

const start = async (req, res) => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected..");
    app.listen(port, () => {
      console.log("Server has been started...");
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
