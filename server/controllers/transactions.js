const { validationResult } = require('express-validator');
const Transaction = require('../models/Transaction');

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

exports.getRecentTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
    // .sort({ date: -1 }) // Sort by date in descending order (most recent first)
    .limit(5); // Limit the result to 5 records;
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

exports.requestDeposit = async (req, res) => {
  try {
    // Implement validation logic here if needed
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
console.log(req.body);
    // Create a new Table instance with the validated data, and save to db table
    const { from, to, currency, amount, status } = req.body;
    const type = "deposit";
    const newTransaction = new Transaction({
      type, from, to, currency, amount, status
    });
    const transaction = await newTransaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error!' });
  }
};

exports.requestWithdraw = async (req, res) => {
  try {
    // Implement validation logic here if needed
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
console.log(req.body);
    // Create a new Table instance with the validated data, and save to db table
    const { from, to, currency, amount, status } = req.body;
    const type = "withdraw";
    const newTransaction = new Transaction({
      from, to, currency, amount, status
    });
    const transaction = await newTransaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error!' });
  }
};

exports.requestTransfer = async (req, res) => {
  try {
    // Implement validation logic here if needed
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
console.log(req.body);
    // Create a new Table instance with the validated data, and save to db table
    const { from, to, currency, amount, status } = req.body;
    const type = "transfer";
    const newTransaction = new Transaction({
      from, to, currency, amount, status
    });
    const transaction = await newTransaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error!' });
  }
};