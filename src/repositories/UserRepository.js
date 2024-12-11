const knex = require("../database/knex")

class UserRepository {
    async findByEmail(email) {
        const userEmail = await knex("users").where({email}).first();
        return userEmail;
    }

    async create(name, email, password) {
        const [userId] = await knex("users").insert({name, email, password});
        return userId;
    }

    async findById(id) {
        const [user] = await knex("users").where({id});
        return user;
    }

    async update(id, data) {
        const updated = await knex("users").where({id}).update({...data});
        return updated;
    }
}

module.exports = UserRepository;