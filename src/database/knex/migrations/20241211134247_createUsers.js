
exports.up = knex => knex.schema.createTable("users", table => {
    table.integer("id").primary();

    table.text("name").notNullable();
    table.text("email").unique().notNullable();
    table.text("password").notNullable();

    table.text("avatar");

    table.enum("role", ["customer", "admin"], {useNative: true, enumName: "roles"})
    .notNullable().default("customer")

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

});


exports.down = knex => knex.schema.dropTable("users");
