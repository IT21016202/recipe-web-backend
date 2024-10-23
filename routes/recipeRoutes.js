const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const { getByCategory, addToFavorites, getFavorites, removeFavorites } = require('../controllers/RecipeController');

// Fetch recipes by category
router.get('/recipes/:category' , getByCategory);

// Add recipe to favorites
router.post('/favorites', authMiddleware, addToFavorites);

// Get favorite recipes
router.get('/favorites', authMiddleware, getFavorites);

// Remove recipe from favorites
router.delete('/favorites/:id', authMiddleware, removeFavorites);

module.exports = router;
