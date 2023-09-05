const express = require("express");
const router = express.Router();
const AuthController = require("./AuthController");

router.get("/", AuthController.get);

module.exports = router;
