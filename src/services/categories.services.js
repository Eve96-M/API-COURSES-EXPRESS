const Categories = require("../models/categories.models");

class categoriesServices {

    static async addCategory(newCategory) {
        try {
          const result = await Categories.create(newCategory);
          return result;
        } catch (error) {
          throw error;
        }
      }

      static async deleteCategory(id) {
        try {
          const result = await Categories.destroy({
            where: { id },
          });
          return result;
        } catch (error) {
          throw error;
        }
      }

}

module.exports = categoriesServices