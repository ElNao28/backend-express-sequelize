const HandlerError = (res, error) => {
  console.log(error);
  return res.status(500).json({
    message: error.message,
  });
};

module.exports = HandlerError;
