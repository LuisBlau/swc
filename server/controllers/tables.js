const { validationResult } = require('express-validator');
const Table = require('../models/Table');

exports.getAllTables = async (req, res) => {
  try {
    const tables = await Table.find();
    res.status(200).json(tables);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

exports.createTable = async (req, res) => {
  try {
    // Implement validation logic here if needed
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
console.log(req.body);
    // Create a new Table instance with the validated data, and save to db table
    const { name, gametype, maxPlayers, limit } = req.body;
    const newTable = new Table({
      name,
      gametype,
      maxPlayers,
      limit,
    });
    const table = await newTable.save();
    res.status(201).json(table);
  } catch (error) {
    console.error(error.message);
    switch(error.code) {
      case 11000:
        return res.status(400).json({ msg: 'Table already exists!' });
      default:
        res.status(500).json({ msg: 'Internal server error!' });
    }
  }
};