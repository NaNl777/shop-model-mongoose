import mongoose from "mongoose";

const userShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
   
   wallet: {
    type: Number,
   },

   total: {
    type: Number
   },

  storyBasket: [
    {
      ref: "Product",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  
});

const User = mongoose.model("User", userShema)

export{User}