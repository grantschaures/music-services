/* 
  Header Comment:
  Name: Grant Schaures
  Date: June 7, 2023
  File: update.js
  Description: updates a certain song in the database
*/

//runs code after HTML has loaded
addEventListener("DOMContentLoaded", async function() {
   document.querySelector("#updateBtn").addEventListener("click", updateSong);

   const response = await fetch("/api/songs");
   if (response.ok) {
      const songs = await response.json();
      let html = "";
      for (let song of songs) {
         let dateString = song.releaseDate;
         html +=
         `<tr>
            <td>${song._id}</td>
            <td>${song.title}</td>
            <td>${song.artist}</td>
            <td>${dateString.split("T")[0]}</td>
            <td>${song.popularity}</td>
            <td>${song.genre}</td>
            <td><input type="button" class="yeet" value="select" id="${song._id}"></td>
         </tr>`
      }
  
      document.querySelector("#table-rows-update").innerHTML = html;
   }

   const inputs = document.querySelectorAll("input.yeet");
   //console.log(inputs.length);
   inputs.forEach(input => {
      input.addEventListener("click", () => {
         var songId = input.id;
         loadSong(songId);
      })
   })
});

//Loads song into Form
async function loadSong(songId) {
   const response = await fetch("/api/songs/" + songId);
   if (response.ok)
   {
      let song = await response.json();
      document.querySelector("#songId").value = song._id;
      document.querySelector("#title").value = song.title;
      document.querySelector("#artist").value = song.artist;
      document.querySelector("#released").value = song.releaseDate.substring(0, 10);
      document.querySelector("#popularity").value = song.popularity;
      document.querySelector("#genre").value = song.genre;
   }
   else
   {
      console.log("there was some sort of error unfortunately");
   }
}
 
 async function updateSong() {
    // Create a song object from the form fields
   const song = {
      _id: document.querySelector("#songId").value,
      title: document.querySelector("#title").value,
      artist: document.querySelector("#artist").value,
      releaseDate: document.querySelector("#released").value,
      popularity: document.querySelector("#popularity").value,
      genre: document.querySelector("#genre").value ? 
      document.querySelector("#genre").value.split(",") : []
   };
         
   const songId = document.querySelector("#songId").value;

   // Send PUT request with JSON-encoded song to Music API
   const response = await fetch("/api/songs/" + songId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(song)
   });
 
   if (response.ok) {      
      alert("Updated song.");
   }
   else {
      document.querySelector("#error").innerHTML = "Cannot update song.";
   }     
}