const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const { validationResult } = require('express-validator');
const { WelcomeMail } = require('../mails');
const User = require('../models/User');
const sendEmail = require('../helpers/sendMail');

// @route   POST api/users
// @desc    Register User
// @access  Public
exports.register = async (req, res) => {
  console.error("users.js: Register request received!", req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  
  console.log(req.body);
  try {
    let user =
      (await User.findOne({ email })) || (await User.findOne({ name }));

    if (user) {
      return res.status(400).json({
        errors: [
          {
            msg: 'Already exists a user with this email or name',
          },
        ],
      });
    }

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    try {
      await sendEmail(user.email, WelcomeMail(user.name));
    } catch (error) {
      console.log(error);
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.JWT_SECRET,
      { expiresIn: config.JWT_TOKEN_EXPIRES_IN },
      (err, token) => {
        if (err) throw err;
        return res.json({ token });
      },
    );
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};

// Define the getAllUsers route handler function
exports.getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Check if there are no users
    if (!users || users.length === 0) {
      //return res.status(404).json({ msg: 'No users found' });
      return [];
    }

    // Return the users as a JSON response
    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error' });
  }
};