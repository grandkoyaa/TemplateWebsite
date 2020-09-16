const joi = require('joi');
const schemaValidation = require('../middlewares/schemaValidation');

const testSchema = joi.object({
  username: joi.string()
    .token()
    .trim()
    .min(3)
    .max(20)
    .required()
});

module.exports = schemaValidation('params', testSchema);
