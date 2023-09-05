require("dotenv").config();
module.exports = {
  production: {
    client: "pg",
    connection: process.env.CONNECTION_URI_PG,
    migrations: {
      directory: "./migrations",
    },
  },
  development: {
    client: "cockroachdb",
    connection: process.env.CONNECTION_URI,
    debug: "true",
    migrations: {
      directory: "./migrations",
    },
  },
};
