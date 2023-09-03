const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

// routers
const transactionRouter = require("./resources/Transaction/TransactionRouter");
const userRouter = require("./resources/Auth/AuthRouter");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/hello", (req, res) => {
  res.send("Hello Pipelines");
});
app.use("/transactions", transactionRouter);
app.use("/auth", userRouter);

const port = process.env.PORT || 3500;

app.listen(port);

module.exports = app;
