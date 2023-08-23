const Transaction = require("../services/TransactionService");
const ErrorHandler = require("../helpers/errorHandler");
const database = require("../config/db");
const { transactionFields } = require("../validators/TransactionSchema");

const transaction = new Transaction(database);

class TransactionInteractor {
  async getTransactions({ page, limit, search }) {
    try {
      const pageNumber = page || 1;
      const limitPerPage = limit || 10;

      const data = await transaction.findMany({
        options: null,
        offset: (pageNumber - 1) * limitPerPage,
        limit: limitPerPage,
        search: search || "",
        fields: transactionFields,
      });
      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 400);
    }
  }
}

module.exports = TransactionInteractor;
