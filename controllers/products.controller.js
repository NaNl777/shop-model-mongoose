import { Product } from "../models/Product.model.js";

const productController = {
  getProductAdmin: async (req, res) => {
    try {
      const data = await Product.find({});
      return res.json(data)
    } catch (error) {
      return res.json(error.message)
    }
  },

  addProductAdmin: async (req, res) => {
    try {
      const data = await Product.create({
        name_product: req.body.name_product,
        price: req.body.price,
        categoryId: req.body.categoryId,
        reviewId: req.body.reviewId,
        brandId: req.body.brandId,
      });
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  deleteProductAdmin: async (req, res) => {
    try {
      const data = await Product.findByIdAndDelete(req.params.id);
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  updateProductAdmin: async (req, res) => {
    try {
      const data = await Product.findByIdAndUpdate(req.params.id, req.body);
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  addReviewByProduct: async(req, res) => {
     try {
        const data = await Product.findByIdAndUpdate(req.params.id, {$push: {reviewId: req.body.review}});
        return res.json(data)
     } catch (error) {
        return res.json(error.message)
     }
  },

  getProduct: async (req, res) => {
    try {
      const data = await Product.find({}).populate({ path: "brandId", select: "name_brand" }).populate({ path: "categoryId", select: "name_category" }).populate({ path: "reviewId", select: "text" });
      return res.json(data)
    } catch (error) {
      return res.json(error.message)
    }
  },

  getProductByCategory: async(req, res) => {
    try {
        const data = await Product.find({categoryId: req.params.id}).populata({path: "categoryId", select: "name_category _id"})
        return res.json(data)
    } catch (error) {
        return res.json(error.message)
    }
  },

  getProductByBrand: async(req, res) => {
    try {
        const data = await Product.find({brandId: req.params.id}).populate({path: "brandId", select: "name_brand _id"})
        return res.json(data);
    } catch (error) {
        return res.json(error.message)
    }
  },

  getProductByReview: async(req, res) => {
    try {
        const data = await Product.find({reviewId: req.params.id}).populate({path: "reviewId", select: "text"})
        return res.json(data)
    } catch (error) {
        return res.json(error.message)
    }
  }
};

export{productController}