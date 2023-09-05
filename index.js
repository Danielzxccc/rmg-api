const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

// routers
const transactionRouter = require("./http/Transaction/TransactionRouter");
const userRouter = require("./http/Auth/AuthRouter");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/transactions", transactionRouter);
app.use("/api/auth", userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
