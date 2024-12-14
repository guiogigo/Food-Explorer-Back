
exports.seed = async function(knex) {
    await knex("users").del()
    await knex("users").insert([
        {
            id: 1,
            name: "User",
            email: "user@email.com",
            password: "$2a$08$9H3iv0nNFGH5M1EMyRm1D.nXRYSMwJ0NRDkl6VlV4afoXX0xq.5oq", // password: 123456
            role: "customer",
        },
        {
            id: 2,
            name: "Admin",
            email: "admin@email.com",
            password: "$2a$08$9H3iv0nNFGH5M1EMyRm1D.nXRYSMwJ0NRDkl6VlV4afoXX0xq.5oq", // password: 123456
            role: "admin"
        }
    ])

}