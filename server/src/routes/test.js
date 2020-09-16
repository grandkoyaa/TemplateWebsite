const express = require('express');
const testSchema = require('../schema/testSchema');
const userModel = require('../models/userModel');

const router = express.Router();

router.get('/:username', testSchema, async (req, res) => {
  const { username } = req.params;
  const userExists = await userModel.findOne({
    username: {
      $regex: new RegExp(`${username}`, 'i')
    }
  });

  if (userExists) return res.status(409).json({ message: 'user already exists!' });

  const data = await userModel.create({
    username
  });
  return res.status(201).json(data);
});

router.post('/', (_, res) => {
  res.send('Welcome POST');
});

router.patch('/', (_, res) => {
  res.send('Welcome PATCH');
});

router.delete('/', (_, res) => {
  res.send('Welcome DELETE');
});

module.exports = router;
