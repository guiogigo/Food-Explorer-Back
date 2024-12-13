const knex = require("../database/knex")

class FavoriteRepository {

    async create({user_id, dish_id}) {
        const [favId] = await knex("favorites").insert({user_id, dish_id});
        return favId;
    }

    async delete({user_id, dish_id}) {
        const result = await knex("favorites").where({user_id, dish_id}).delete();
        return result;
    }

    async findByUser({user_id, dish_id}) {
        const [dish] = await knex("favorites").where({user_id, dish_id});
        return dish;
    }

    async indexUserFavs(user_id) {
        const dish = await knex("favorites").where({user_id});
        return dish;
    }

}

module.exports = FavoriteRepository;