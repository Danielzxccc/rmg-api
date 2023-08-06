function errorReponseHandler(res, error) {
  res
    .status(error.httpCode || 500)
    .json({ message: error.message, error: true });
}

module.exports = errorReponseHandler;
