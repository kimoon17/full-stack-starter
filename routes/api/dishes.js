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

// path: /api/items/:id
router.get('/:id', async (req, res) => {
  const record = await models.dishes.findByPk(req.params.id);
  if (record) {
    res.json(record.toJSON());
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
