/* 
  Header Comment:
  Name: Grant Schaures
  Date: June 7, 2023
  File: delete.js
  Description: deletes song from database
*/

//This function rusn when DOM content has loaded and creates event handler for click on deleteBtn
addEventListener("DOMContentLoaded", async function() {
   document.querySelector("#deleteBtn").addEventListener("click", deleteSong);
   getAllSongs();
});
 
 // Load all songs into the drop-down list
async function getAllSongs() {
   const response = await fetch("/api/songs");
   if (response.ok) {
      const songs = await response.json();
      let html = "";
      for (let song of songs) {
         html += `<option value="${song._id}">${song.title}</option>`; 
      }
      document.querySelector("#songDropDown").innerHTML = html;
   }
}
 
async function deleteSong() {
   // Get the song ID of the selected song
   const songId = document.querySelector(
      "#songDropDown option:checked").value;

   const response = await fetch("/api/songs/" + songId, {
      method: "DELETE"
   });

   if (response.ok) {
      // Successfully deleted song
      getAllSongs();
   }
   else {
      document.querySelector("#error").innerHTML = "Cannot delete song.";
   } 
}