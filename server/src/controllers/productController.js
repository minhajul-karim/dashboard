const { addProduct } = require('../services/userService');

const addProductHandler = async (req, res, next) => {
  try {
    const { body } = req;
    const id = await addProduct(body);
    res.status(201).send(id);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addProductHandler,
};
