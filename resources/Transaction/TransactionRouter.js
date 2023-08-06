const express = require("express");
const router = express.Router();
const transactionController = require("./TransactionController");
const { checkSchema } = require("express-validator");
const validationHandler = require("../../middleware/validationHandler");
const { transactionSchema } = require("../../schemas/TransactionSchema");

router.post(
  "/",
  checkSchema(transactionSchema),
  validationHandler,
  transactionController.createTransaction
);
router.get("/:id", validationHandler, transactionController.findTransaction);
router.get("/", transactionController.findAllTransaction);
router.put(
  "/:id",
  checkSchema(transactionSchema),
  validationHandler,
  transactionController.updateTransaction
);
router.delete(
  "/:id",
  validationHandler,
  transactionController.deleteTransaction
);

module.exports = router;
