exports.up = (knex) => {
  return knex.schema
    .dropTableIfExists("transactions")
    .createTable("transactions", function (table) {
      table.increments("id").primary();
      table.text("customer_name").notNullable();
      table.date("travel_startdate").notNullable();
      table.date("travel_enddate").notNullable();
      table.text("startpoint").notNullable();
      table.text("endpoint").notNullable();
      table.integer("pax").notNullable();
      table.integer("amount").notNullable();
      table.integer("gas_fee").notNullable();
      table.integer("driver_fee").notNullable();
      table.integer("maintenance_fee").notNullable();
    })
    .dropTableIfExists("users")
    .createTable("users", function (table) {
      table.increments("id").primary();
      table.text("username").notNullable();
      table.text("password").notNullable();
      table.text("email").notNullable();
      table.text("name").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("transactions").dropTable("users");
};
