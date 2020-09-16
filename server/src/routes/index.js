/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const express = require('express');
const fs = require('fs');

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Ok');
});

const routes = fs.readdirSync('./src/routes');
routes.forEach((route) => {
  const cleanRoute = route.replace('.js', '');
  if (cleanRoute !== 'index') {
    router.use(`/${cleanRoute}`, require(`./${cleanRoute}`));
  }
});

module.exports = router;
