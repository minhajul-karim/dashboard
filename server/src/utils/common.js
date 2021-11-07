const getMessage = (error) => {
  const errorField = Object.keys(error.keyValue)[0];
  const msg =
    errorField === 'productName'
      ? 'Product name already exists'
      : 'SKU code already exists';
  return msg;
};

module.exports = {
  getMessage,
};
