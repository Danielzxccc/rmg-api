const knex = require("knex");

const client = knex({
  client: "cockroachdb",
  connection: process.env.CONNECTION_URI,
  debug: true,
});

module.exports = client;
