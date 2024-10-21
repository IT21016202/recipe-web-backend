const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const { getByCategory, addToFavorites, getFavorites } = require('../controllers/RecipeController');

// Fetch recipes by category
router.get('/recipes/:category' , getByCategory);

// Add recipe to favorites
router.post('/favorites', authMiddleware, addToFavorites);

// Get favorite recipes
router.get('/favorites', authMiddleware, getFavorites);

module.exports = router;
