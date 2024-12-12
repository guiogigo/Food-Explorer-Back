exports.up = knex => knex.schema.createTable("dishes", table => {
    table.integer("id").primary();
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")

    table.text("name").notNullable();
    table.text("description").notNullable();

    table.text("avatar");
    table.double("price", 2);


    table.integer("category_id").references("id").inTable("categorys").onDelete("CASCADE")

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

});


exports.down = knex => knex.schema.dropTable("dishes");
