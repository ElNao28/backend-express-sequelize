const responseApi = (res, msj, code = 200, data = {}) => {
  return res.status(code).json({
    message: msj,
    data,
  });
};

module.exports = responseApi;
