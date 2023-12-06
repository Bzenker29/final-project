const express = require('express');
const router = express.Router();
const BlogPost = require('./models/BlogPost'); // Adjust the path based on your file structure

// Route to handle POST request for player data
router.post('/players', async (req, res) => {
    try {
        const { players } = req.body;

        // Create a new BlogPost instance and save player data to MongoDB
        const newPost = new BlogPost({
            title: 'Selected Players',
            content: JSON.stringify(players)
        });

        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
