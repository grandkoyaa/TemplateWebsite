/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening: http://localhost:${port}`);
});

mongoose.connect(`mongodb://${process.env.MONGO_URI}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) {
    throw err;
  }
});
