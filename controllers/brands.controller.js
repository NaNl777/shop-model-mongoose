import { Brand } from "../models/Brand.model.js";

const brandController = {
  // getBrandByUser: async (req, res) => {
  //   try {
  //     const data = await Brand.find({});
  //     return res.json(data);
  //   } catch (error) {
  //     return res.json(error.message);
  //   }
  // },

  addBrandByAdmin: async (req, res) => {
    try {
      const data = await Brand.create({
        name_brand: req.body.name_brand,
      });
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  deleteByAdmin: async (req, res) => {
    try {
      const data = await Brand.findByIdAndDelete(req.params.id);
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  updateByAdmin: async (req, res) => {
    try {
      const data = await Brand.findByIdAndUpdate(req.params.id, req.body);
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },

  getBrand: async (req, res) => {
    try {
      const data = await Brand.find({});
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  }
};

export{brandController}
