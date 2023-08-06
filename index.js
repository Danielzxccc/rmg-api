const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

// routers
const transactionRouter = require("./resources/Transaction/TransactionRouter");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/transactions", transactionRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
