/* 
  Header Comment:
  Name: Grant Schaures
  Date: June 7, 2023
  File: index.js
  Description: sets up the express server
*/

'use strict';

const mongoose = require('mongoose');
const express = require('express'); //require() imports the express module
const path = require('path');
require('dotenv').config();

const app = express(); //express is a popular web application framework for node.js
                       //and express() creates the express application object

const PORT = 3000; //just initializing the port constant to 3000

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

//serve static files from the public directory
//app.use applies that path to the express object
//if no URL path specified, express.js automatically looks up index.html
//in specified directory
app.use(express.static('public')); //middleware function

app.get("/index", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'index.html')
  res.sendFile(filePath);
});

app.get("/search", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'search.html')
  res.sendFile(filePath);
});

app.get("/update", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'update.html')
  res.sendFile(filePath);
});

app.get("/delete", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'delete.html')
  res.sendFile(filePath);
});

app.get("/add", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'add.html')
  res.sendFile(filePath);
});

app.get("/list", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'list.html')
  res.sendFile(filePath);
});

app.post("/index", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'index.html')
  res.sendFile(filePath);
});

app.post("/search", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'search.html')
  res.sendFile(filePath);
});

app.post("/update", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'update.html')
  res.sendFile(filePath);
});

app.post("/delete", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'delete.html')
  res.sendFile(filePath);
});

app.post("/add", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'add.html')
  res.sendFile(filePath);
});

app.post("/list", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'list.html')
  res.sendFile(filePath);
});

app.use(express.json());

app.use("/api/songs", require("./api/songs"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});