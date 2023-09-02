require("dotenv").config();
module.exports = {
  development: {
    client: "cockroachdb",
    connection: process.env.CONNECTION_URI,
    migrations: {
      directory: "./migrations",
    },
  },
};
