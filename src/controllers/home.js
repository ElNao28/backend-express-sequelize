const helloWord = (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  });
};

const setValueToMessage = (req, res) => {
  const { message } = req.body;
  return res.status(200).json({
    message: `Hola ${message}`,
  });
};
module.exports = { helloWord, setValueToMessage };
