const { validationResult } = require("express-validator");
const errorResponseHandler = require("../../helpers/errorResponseHandler");
const Transaction = require("../../services/TransactionService");

const transaction = new Transaction();

async function createTransaction(req, res) {
  try {
    const data = await transaction.save(req.body);
    res.status(201).json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

async function findAllTransaction(req, res) {
  try {
    const data = await transaction.findAll();
    res.json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

async function findTransaction(req, res) {
  try {
    const id = req.params.id;
    const data = await transaction.findOne(id);
    res.json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

// add validation later
async function updateTransaction(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await transaction.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

async function deleteTransaction(req, res) {
  try {
    const id = req.params.id;
    const data = await transaction.delete(id);
    res.json(data);
  } catch (error) {
    errorResponseHandler(res, error);
  }
}

module.exports = {
  createTransaction,
  findAllTransaction,
  findTransaction,
  updateTransaction,
  deleteTransaction,
};
