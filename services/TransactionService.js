const BaseService = require("./Base/BaseService");

class Transaction extends BaseService {
  constructor() {
    super("transactions");
  }
}

module.exports = Transaction;
