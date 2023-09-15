const express = require('express');
const router = express.Router();
// const { check } = require('express-validator');
const {
  getAllTransactions,
  getHistory,
  getRecentTransactions,
  requestDeposit,
  requestWithdraw,
  requestTransfer
} = require('../../controllers/transactions');

router.post(
  '/all',
  getAllTransactions
);

router.post(
  '/history',
  getHistory
);

router.post(
  '/recent',
  getRecentTransactions
);

router.post(
  '/deposit',
  requestDeposit
);

router.post(
  '/withdraw',
  requestWithdraw
);

router.post(
  '/transfer',
  requestTransfer
);

module.exports = router;