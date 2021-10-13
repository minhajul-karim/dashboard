const Joi = require('joi');

const schema = Joi.object().keys({
  productName: Joi.string().min(3).max(30).required(),
  skuCode: Joi.string().min(4).max(20).required(),
  productDescription: Joi.string().required(),
  category: Joi.string().min(3).max(30).required(),
  weight: Joi.number().required(),
  cost: Joi.number().min(0).required(),
  price: Joi.number().min(0).required(),
});

const validate = (data) => {
  const result = schema.validate(data, { abortEarly: false });
  return result;
};

module.exports = validate;
