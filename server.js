const express = require("express");
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const cors = require('cors');
require("dotenv").config();
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 8000;

// Start server
app.listen(PORT,() => console.log("Server listening at port " + PORT));



