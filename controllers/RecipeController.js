const axios = require('axios');
const Favorite = require('../models/Favorite');

// Fetch recipes by category
const getByCategory = async (req, res) => {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${req.params.category}`);
        res.json(response.data.meals);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }  
}


// Add recipe to favorites
const addToFavorites = async (req, res) => {
    const { recipeId, name, image, category } = req.body;
    const userId = req.user.id;

    try {
        const existing = await Favorite.findOne({ userId, recipeId });
        if (existing) {
            return res.status(400).json({ message: 'This Recipe is already in your favorites' });
        }

        const newFavorite = new Favorite({ userId, recipeId, name, image, category });
        await newFavorite.save();

        res.status(201).json({ message: 'Recipe added to favorites successfully', favorite: newFavorite });
    } catch (error) {
        console.error('Error adding to favorites', error);
        res.status(500).json({ message: 'Server error' });
    }
}


// Get user favorite recipes
const getFavorites = async (req, res) => {
    const userId = req.user.id;

    try {
        const favorites = await Favorite.find({ userId });

        if (favorites.length === 0) {
            return res.status(404).json({ message: 'No favorites found' });
        }

        res.status(200).json({ message: 'Favorites retrieved successfully', favorites });
    } catch (error) {
        console.error('Error retrieving favorites:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { getByCategory, addToFavorites, getFavorites };

