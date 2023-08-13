const BaseService = require("./Base/BaseService");

class User extends BaseService {
  constructor(database) {
    super("users", database);
  }
}

module.exports = User;
