const knex = require("../database/knex")

class DishRepository {
    async create(user_id, name, description, avatar, price, category_id) {
        const [dishId] = await knex("dishes").insert({
            user_id,
            name, 
            description,
            avatar,
            price,
            category_id
        });
        console.log(dishId);
        return dishId;
    }

    async delete(id) {
        const result = await knex("dishes").where({id}).delete();
        return result;
    }

    async update(id, data) {
        const updated = await knex("dishes").where({id}).update({...data});
        return updated;
    }

    async findByName(user_id, name) {
        const [dish] = await knex("dishes").where({name, user_id});
        return dish;
    }

    async findById(id) {
        const [dish] = await knex("dishes").where({id});
        return dish;
    }
}

module.exports = DishRepository;