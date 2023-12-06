const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Set up MongoDB connection
const mongoURI = 'mongodb+srv://Cluster50738:space@cluster50738.tlt566q.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// Set the directory where your website files are located
const websiteDirectory = path.join(__dirname, 'your_website_directory');

// Serve static files
app.use(express.static(websiteDirectory));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
