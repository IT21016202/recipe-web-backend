const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    recipeId: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    category: {
        type: String, 
    }
}, { timestamps: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
