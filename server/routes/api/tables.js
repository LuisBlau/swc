const express = require('express');
const router = express.Router();
// const { check } = require('express-validator');
const {
  getAllTables,
  createTable,
  GetTablesCount
} = require('../../controllers/tables');

router.post(
  '/all',
  getAllTables
);

router.post(
  '/create',
  createTable
);

router.post(
  '/count',
  GetTablesCount
);

module.exports = router;