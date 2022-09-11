import mongoose  from "mongoose";

const brandSchema = mongoose.Schema({
    name_brand: {
        type: String,
        required: true
    },
})

const Brand = mongoose.model("Brand", brandSchema);

export{Brand}