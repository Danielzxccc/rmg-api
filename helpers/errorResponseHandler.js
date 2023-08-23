function errorReponseHandler(res, error) {
  res.status(error.httpCode || 500).json({ message: error.stack, error: true });
}

module.exports = errorReponseHandler;
