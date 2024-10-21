const axios = require('axios');
const User = require('../models/User');

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
    res.send('Add to favorites');
}


// Get favorite recipes
const getFavorites = async (req, res) => {
    res.send('Get favorites');
}

module.exports = { getByCategory, addToFavorites, getFavorites };

