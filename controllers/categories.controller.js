import { Category } from "../models/Category.model.js";

const categoryController = {
    addCategoryByAdmin: async(req, res) => {
        try {
            const data = await Category.create({
                name_category: req.body.name_category
            })
            return res.json(data)
        } catch (error) {
            return res.json(error.message)
        }
    },

    deleteCategoryByAdmin: async(req, res) => {
        try {
            const data = await Category.findOneAndDelete(req.params.id);
            return res.json(data)
        } catch (error) {
            return res.json(error.message)
        }
    },

    updateCategoryByAdmmin: async(req, res) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, req.body)
            return res.json(data)
        } catch (error) {
            return res.json(error.message)
        }
    },

    
    getCategoryByAdmin: async(req, res) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, req.body)
            return res.json(data)
        } catch (error) {
            return res.json(error.message)
        }
    }
}

export{categoryController}