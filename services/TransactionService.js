const BaseService = require("./Base/BaseService");

class Transaction extends BaseService {
  constructor(database) {
    super("transactions", database);
  }
}

module.exports = Transaction;
