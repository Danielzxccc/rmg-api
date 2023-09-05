const errorResponseHandler = require("../../helpers/errorResponseHandler");
const User = require("../../services/UserService");
const database = require("../../config/db");
const user = new User(database);

// test fetching
async function get(req, res) {
  try {
    const data = await user.findAll();
    res.json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

module.exports = { get };
