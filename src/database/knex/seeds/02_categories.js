exports.seed = async function(knex) {
    await knex("categories").del()
    await knex("categories").insert([
        {
            id: 1,
            name: "Bebidas",
        },
        {
            id: 2,
            name: "Refeições",
        },
        {
            id: 3,
            name: "Sobremesas",
        }
    ])
}