const knex = require("../database/knex")

class IngredientRepository {
    async create(ingredient) {
        const [ingredientId] = await knex("ingredients").insert(ingredient);
        return ingredientId;
    }

    async findByName(name) {
        const [ingredient] = await knex("ingredients").where({name});
        return ingredient;
    }

    async findById(id) {
        const [ingredient] = await knex("ingredients").where({id});
        return ingredient;
    }

    async findByDish(dish_id) {
        const ingredients = await knex("ingredients").where({dish_id});
        return ingredients;
    }

    async delete(id) {
        const deleted = await knex("ingredients").where({id}).delete();
        return deleted;
    }
}

module.exports = IngredientRepository;