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

    async findByUser(user_id, query) {
        const dishes = await knex("dishes").select({
            id: 'id',
            name: 'name',
            description: 'description',
            avatar: 'avatar',
            price: 'price',
            category_id: 'category_id'
        })
        .where({user_id})
        .whereLike("name", `%${query}%`)
        .orderBy('name')

        return dishes;
    }

    async dishesBySearch(query){
        const dishes = await knex("dishes as d")
        .join("categories as c", "c.id", "d.category_id")
        .leftJoin("ingredients as i", "i.dish_id", "d.id")
        .select(
            'd.id',
            'd.name',
            'd.description',
            'd.price',
            'd.avatar',
            'c.id as categoryId',
            'c.name as category',
            knex.raw('GROUP_CONCAT(i.name) as ingredients')
        )
        .whereLike('d.name', `%${query}%`)
        .orWhereIn('d.name', query)
        .groupBy('d.id')
        .orderBy('category');
        return dishes;
    }

    async findById(id) {
        const idArray = Array.isArray(id) ? id : [id]
        const dish = await knex("dishes as d")
        .join("categories as c", "c.id", "d.category_id")
        .leftJoin("ingredients as i", "i.dish_id", "d.id")
        .select(
            'd.id',
            'd.user_id',
            'd.name',
            'd.description',
            'd.price',
            'd.avatar',
            'c.id as categoryId',
            'c.name as category',
            knex.raw('GROUP_CONCAT(i.name) as ingredients')
        )
        .whereIn("d.id", idArray)
        .groupBy('d.id')
        .orderBy('category');
        return dish;
    }
}

module.exports = DishRepository;