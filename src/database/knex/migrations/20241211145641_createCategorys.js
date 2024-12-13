exports.up = knex => knex.schema.createTable("categories", table => {
    table.integer("id").primary();
    table.text("name").notNullable();
});

exports.down = knex => knex.schema.dropTable("categories");
