/* 
  Header Comment:
  Name: Grant Schaures
  Date: June 7, 2023
  File: db.js
  Description: connects to mongoDB database
*/

const mongoose = require("mongoose");

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;