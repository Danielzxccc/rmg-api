const errorResponseHandler = require("../../helpers/errorResponseHandler");
const Transaction = require("../../services/TransactionService");
const Interactor = require("./TransactionInteractor");
const database = require("../../config/db");

const transaction = new Transaction(database);
const interactor = new Interactor(database);

async function createTransaction(req, res) {
  try {
    const data = await interactor.saveTransaction(req.body);
    res.status(201).json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

async function findTransactions(req, res) {
  try {
    const { page, limit, search } = req.query;
    const data = await interactor.getTransactions({
      page,
      limit,
      search,
    });
    res.json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

async function findTransaction(req, res) {
  try {
    const { id } = req.params;
    const data = await transaction.findOne(id);
    res.json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

// add validation later
async function updateTransaction(req, res) {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await transaction.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

async function deleteTransaction(req, res) {
  try {
    const { id } = req.params;
    const data = await transaction.delete(id);
    res.json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

module.exports = {
  createTransaction,
  findTransactions,
  findTransaction,
  updateTransaction,
  deleteTransaction,
};
