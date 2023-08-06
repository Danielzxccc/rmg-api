const { validationResult } = require("express-validator");

function validationHandler(req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty())
    return res.status(400).json({ error: true, errors: result.array() });
  next();
}

module.exports = validationHandler;
