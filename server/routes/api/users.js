const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
  register,
  getAllUsers,
  getLeaderboard,
  GetCustomersCount
} = require('../../controllers/users');

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters',
    ).isLength({ min: 6 }),
  ],
  register,
);

router.post(
  '/all',
  getAllUsers
);

router.post(
  '/leaderboard',
  getLeaderboard
);

router.post(
  '/count',
  GetCustomersCount
);

module.exports = router;
