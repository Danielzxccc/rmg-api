const errorResponseHandler = require("../../helpers/errorResponseHandler");
const User = require("../../services/UserService");

const user = new User();

// test fetching
async function get(req, res) {
  try {
    const data = await user.findMany();
    res.json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

module.exports = { get };
