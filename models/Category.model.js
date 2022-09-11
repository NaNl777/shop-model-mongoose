import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name_category: {
        type: String
    }
})

const Category = mongoose.model("Category", categorySchema)

export{Category}