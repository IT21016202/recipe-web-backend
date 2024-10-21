const express = require('express');
const {login, register} = require('../controllers/AuthController');
const router = express.Router();

// Register a new user
router.post('/register', register);

// Login user
router.post('/login', login);

module.exports = router;
