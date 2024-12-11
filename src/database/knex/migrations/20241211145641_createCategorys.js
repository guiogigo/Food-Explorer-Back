exports.up = knex => knex.schema.createTable("categorys", table => {
    table.integer("id").primary();
    table.text("name").notNullable();
});

exports.down = knex => knex.schema.dropTable("categorys");
