import { User } from "../models/User.model.js";
import { Product } from "../models/Product.model.js";

const userController = {
  addUser: async (req, res) => {
    try {
      const data = await User.create({
        text: req.body.text,
      });
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const data = await User.findByIdAndDelete(req.params.id);
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  updateUser: async (req, res) => {
    try {
      const data = await User.findByIdAndUpdate(req.params.id, req.body);
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  getUser: async(req, res) => {
    try {
        const data = await User.find({}).populate({path: "storyBasket", select: "name_product price _id"});
        return res.json(data)
    } catch (error) {
        return res.json(error.message)
    }
  },
 
  addProductByBasket: async(req, res) => {
    const user = await User.findById(req.params.id);
    const product = await Product.findById(req.body.product);
    
    let totalSumBasket = user.total + product.price;
    
    try {
        const data = await user.updateOne({
            $set: {total: totalSumBasket},
            $addToSet: {storyBasket: req.body.product}
        })
        return res.json(data)
    } catch (error) {
        return res.json(error.message)
    }
  },
   
  deleteProductByBasket: async(req, res) => {
    const user = await User.findById(req.params.id);
    const product = await Product.findById(req.body.product);
   
    let totalDelete = user.total - product.price

    try {
        const data = await user.updateOne({
            $pull: {storyBasket: req.body.product},
            $set: {total: totalDelete}
        })
        return res.json(data)
    } catch (error) {
        return res.json(error.message)
    }
  },

  buyProductForUser: async(req, res) => {
    const user = await User.findById(req.params.id);

    if(user.wallet < user.total){
        res.json("К сожаления у вас не хватает средств для покупки");
    };

    let remainderAmount = user.wallet - user.total
    
    try {
        const data = await user.update({
            $set: {
                wallet: remainderAmount,
                storyBasket: [],
                total: 0
            },
        })
        return res.son(data)
    } catch (error) {
        return res.json(error.message)
    }
  },

  addMoneyWallet: async(req, res) => {
     const user = await User.findById(req.params.id);
     
     let money = user.wallet + req.body.money;

     try {
        const data = await user.findById({
            $set: {
                wallet: money,
            }
        })
        return res.json(data)
     } catch (error) {
        return res.json(error.message)
     }
  }, 
}

export{userController}
