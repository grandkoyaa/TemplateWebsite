module.exports = (type, schema) => async (req, res, next) => {
  try {
    const data = req[type];
    const schemaValue = await schema.validateAsync(data);
    req[type] = schemaValue;
    next();
  } catch (error) {
    error.message = error.message.replace('"', '');
    next(error);
  }
};
