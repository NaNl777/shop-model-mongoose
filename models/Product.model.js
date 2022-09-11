import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name_product: {
        type: String,
        required: true
    },

    reviewId: {
        ref: "Review",
        type: mongoose.Schema.Types.ObjectId
    },

    brandId: {
        ref: "Product",
        type: mongoose.Schema.Types.ObjectId
    },

    categoryId: {
        ref: "Category",
        type: mongoose.Schema.Types.ObjectId
    },
 
    price: {
        type: Number,
        default: 0
    }
})

const Product = mongoose.model("Product", productSchema)

export{Product}