const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb+srv://Cluster50738:space@cluster50738.tlt566q.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Create a schema for the user input data
const userInputSchema = new mongoose.Schema({
    forwardPlayer1: String,
    forwardPlayer2: String,
    midfieldPlayer1: String,
    midfieldPlayer2: String,
    goaliePlayer: String
});

const UserInput = mongoose.model('UserInput', userInputSchema);

// Endpoint to handle form submission
app.post('/submit-user-input', async (req, res) => {
    const { forwardPlayer1, forwardPlayer2, midfieldPlayer1, midfieldPlayer2, goaliePlayer } = req.body;

    try {
        // Create a new UserInput document
        const userInput = new UserInput({
            forwardPlayer1,
            forwardPlayer2,
            midfieldPlayer1,
            midfieldPlayer2,
            goaliePlayer
        });

        // Save user input data to MongoDB
        await userInput.save();

        res.status(200).json({ message: 'User input added successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding user input to the database' });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
