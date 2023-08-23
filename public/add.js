/* 
  Header Comment:
  Name: Grant Schaures
  Date: June 7, 2023
  File: add.js
  Description: deals with post data for adding a song to the database
*/

addEventListener("DOMContentLoaded", function() {
      document.querySelector("#addBtn").addEventListener("click", () => {
      if (validateForm())
      {
         addSong();
      }
   });      
});
 
async function addSong() {
   // Create a song object from the form fields
   const song = {
      title: document.querySelector("#title").value,
      artist: document.querySelector("#artist").value,
      releaseDate: document.querySelector("#released").value,
      popularity: document.querySelector("#popularityRating").value,
      genre: document.querySelector("#genre").value ? 
      document.querySelector("#genre").value.split(",") : []
   };

   // POST a JSON-encoded song to Music API
   const response = await fetch("/api/songs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(song)
   });

   if (response.ok) {
      const results = await response.json();
      alert("Added song with ID " + results._id);

      // Reset the form after adding the song
      document.querySelector("form").reset();
   }
   else {
      document.querySelector("#error").innerHTML = "Cannot add song.";
   }     
}

function validateForm() {
   const titleInput = document.getElementById("title").value;
   const artistInput = document.getElementById("artist").value;
   const releasedInput = document.getElementById("released").value;
   const popularityInput = document.getElementById("popularityRating").value;
   const genreInput = document.getElementById("genre").value;

   //Validate inputs
   if (titleInput === "") {
      alert("Please enter the title.");
      return false; // Prevent form submission
   }

   console.log(artistInput);
   if (artistInput === "") {
      alert("Please enter the artist.");
      return false; // Prevent form submission
   }

   if (releasedInput === "") {
      alert("Please enter the date.");
      return false; // Prevent form submission
   }

   if (popularityInput === "") {
      alert("Please enter the popularity rating.");
      return false; // Prevent form submission
   }

   if (genreInput === "") {
      alert("Please enter the genre(s).");
      return false; // Prevent form submission
   }

   // Form inputs are valid, allow submission
   return true;
}