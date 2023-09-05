/* 
  Header Comment:
  Name: Grant Schaures
  Date: June 7, 2023
  File: songs.js
  Description: allows for the posting of a new song in the database
*/

const Song = require("../models/song");
const router = require("express").Router();

// Get list of all songs in the database
router.get("/", function(req, res) {
  console.log("TEST");
   Song.find()
     .then(songs => {
       res.json(songs);
     })
     .catch(err => {
       res.status(400).send(err);
     });
 });

// Add a new song to the database
router.post("/", function(req, res) {
   const song = new Song(req.body);
   try {
    song.save();
        res.status(201).json(song);
    } catch (err) {
        res.status(400).send(err);
    }
});

//find song by id
router.get("/:id", function(req, res) {
   // Use the ID in the URL path to find the song
   Song.findById(req.params.id)
    .then(song => {
      res.json(song);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

//delete song from database
router.delete("/:id", function(req, res) {
   Song.deleteOne({ _id: req.params.id })
     .then(result => {
       if (result.deletedCount === 0) {
         res.sendStatus(404);
       } else {
         res.sendStatus(204);
       }
     })
     .catch(err => {
       res.status(400).send(err);
     });
 });

 //get songs based on genre
 router.get("/", function(req, res) {
   let query = {};
    
   // Check if genre was supplied in query string
   if (req.query.genre) {
      query = { genre: req.query.genre };
   }

   Song.find(query)
    .then(songs => {
      res.json(songs);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.put("/:id", function(req, res) {
  // Song to update sent in body of request
  const song = req.body;

  // Replace existing song fields with updated song
  Song.updateOne({ _id: req.params.id }, song)
  .then(result => {
    if (result.matchedCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

module.exports = router;