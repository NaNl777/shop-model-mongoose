import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    text: {
        type: String
    },

    user: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }
})

const Review = mongoose.model("Review", reviewSchema)

export{Review}