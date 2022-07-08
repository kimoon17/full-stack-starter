const express = require('express');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');

const models = require('../../models');
const interceptors = require('../interceptors');
const helpers = require('../helpers');

const router = express.Router();

// GET /api/items
router.get('/', async (req, res) => {
  const records = await models.dishes.findAll();
  res.json(records.map((r) => r.toJSON()));
});

module.exports = router;
