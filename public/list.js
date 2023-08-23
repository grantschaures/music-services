/* 
  Header Comment:
  Name: Grant Schaures
  Date: June 7, 2023
  File: list.js
  Description: lists songs in database
*/

//Runs displayAllSongs function once DOM content has loaded
addEventListener("DOMContentLoaded", async function() {
  displayAllSongs();
});

// Load all songs into the drop-down list
async function displayAllSongs() {
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
        </tr>`
      }
     document.querySelector("#table-rows").innerHTML = html;
  }
}