/* 
  Header Comment:
  Name: Grant Schaures
  Date: June 7, 2023
  File: song.js
  Description: create song schema in json format
*/

const db = require("../db");

// Create a model from the schema
const Song = db.model("Song", {
   title:       { type: String, required: true },
   artist:      String,
   popularity:  { type: Number, min: 1, max: 10 },
   releaseDate: { type: Date, default: Date.now },
   genre:       [ String ]
});

module.exports = Song;