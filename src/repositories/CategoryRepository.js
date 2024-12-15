const knex = require("../database/knex")

class CategoryRepository {

    async index() {
        const categories = await knex("categories")
        return categories;
    }

}

module.exports = CategoryRepository;