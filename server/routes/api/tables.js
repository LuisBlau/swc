const express = require('express');
const router = express.Router();
// const { check } = require('express-validator');
const {
  getAllTables,
  createTable
} = require('../../controllers/tables');

router.post(
  '/all',
  getAllTables
);

router.post(
  '/create',
  createTable
);

module.exports = router;