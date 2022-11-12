const categoriesServices = require("../services/categories.services")

const createCategory = async (req, res, next) => {
    try {
        const newCategory = req.body;
        const result = await categoriesServices.addCategory(newCategory);
        res.status(201).json(result);
    } catch (error) {
        console.log(error)
    }
}

const deleteCategory = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await categoriesServices.deleteCategory(id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {createCategory, deleteCategory}
