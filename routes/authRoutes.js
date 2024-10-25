const express = require('express');
const {login, register, loginValidation, registerValidation} = require('../controllers/AuthController');
const router = express.Router();

// Register a new user
router.post('/register', registerValidation, register);

// Login user
router.post('/login', loginValidation, login);

module.exports = router;
