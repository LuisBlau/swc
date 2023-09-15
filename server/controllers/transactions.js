const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const Transaction = require('../models/Transaction');
const User = require('../models/User');

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ _id: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

exports.getHistory = async (req, res) => {

  const { name, currency, type } = req.body;

  try {
    const query = { from: name };
    if (currency) query.currency = currency;
    if (type) query.type = type;

    const transactions = await Transaction.find(query)
      .sort({ _id: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

exports.getRecentTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ status: { $ne: "completed" } })
    .sort({ _id: -1 }) // Sort by date in descending order (most recent first)
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
    if(amount < 0.01) {
      console.error("Minimum deposit amount is 0.01", amount);
      return res.status(400).json({ errors: [{ msg: 'Minimum deposit amount is 0.01' }] });
    }
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
    const { from, to, currency, amount, password } = req.body;
    if(amount < 500) {
      console.error("Minimum withdrawal amount is 500", amount);
      return res.status(400).json({ errors: [{ msg: 'Minimum withdrawal amount is 500' }] });
    }

    let user = await User.findOne({ name: from });

    if (!user) {
      console.error("No user found", from);
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.error("Password mismatched!", password);
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    if(user.chipsAmount < amount) {
      console.error("Not enough chips!", amount);
      return res.status(400).json({ errors: [{ msg: 'Not enough chips!' }] });
    }

    // Calculate the new chipsAmount after deduction
    const newChipsAmount = user.chipsAmount - amount;
    // Update the user's chipsAmount in the database
    await User.updateOne({ _id: user._id }, { $set: { chipsAmount: newChipsAmount } });
      
    const newTransaction = new Transaction({
      type:"withdraw", from, to, currency, amount
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

    const { from, to, currency, amount, password } = req.body;
    if(amount < 2) {
      console.error("Minimum transfer amount is 2", amount);
      return res.status(400).json({ errors: [{ msg: 'Minimum withdrawal amount is 2' }] });
    }
    
    let user = await User.findOne({ name: from });

    if (!user) {
      console.error("No user found", from);
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    let receiver = await User.findOne({ name: to });

    if (!receiver) {
      console.error("No receiver found", to);
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.error("Password mismatched!", password);
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    if(user.chipsAmount < amount) {
      console.error("Not enough chips!", amount);
      return res.status(400).json({ errors: [{ msg: 'Not enough chips!' }] });
    }

    // Update the user's chipsAmount in the database
    await User.updateOne({ _id: user._id }, { $set: { chipsAmount: user.chipsAmount - amount } });
    await User.updateOne({ _id: receiver._id }, { $set: { chipsAmount: parseFloat(receiver.chipsAmount) + parseFloat(amount) } });

    const newTransaction = new Transaction({
      type:"transfer", from, to, currency, amount, status:"completed"
    });

    const transaction = await newTransaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error!' });
  }
};