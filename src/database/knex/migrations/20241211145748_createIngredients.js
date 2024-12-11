exports.up = knex => knex.schema.createTable("ingredients", table => {
    table.integer("id").primary();
    table.text("name").notNullable();

    table.integer("dish_id").references("id").inTable("dishes").onDelete("CASCADE");
});

exports.down = knex => knex.schema.dropTable("ingredients");
