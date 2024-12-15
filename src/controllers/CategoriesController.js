const CategoryRepository = require("../repositories/CategoryRepository");

class CategoriesController {
    async index(req, res) {

        try {
            const categoryRepository = new CategoryRepository();
    
            const categories = await categoryRepository.index();
            return res.status(200).json(categories);
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }

    }
}

module.exports = CategoriesController;