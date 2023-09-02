const knex = require("knex");
const { development, production } = require("../knexfile");

const client = knex(
  process.env.NODE_ENV === "development" ? development : production
);

module.exports = client;
