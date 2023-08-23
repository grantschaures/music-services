//Incomplete genre search file
addEventListener("DOMContentLoaded", async function() {
    document.querySelector("#searchBtn").addEventListener("click", searchGenre);
    getAllGenres();
});

async function getAllGenres() {
    const response = await fetch("/api/songs");
    if (response.ok) {
       const songs = await response.json();
       let html = "";
       let genre_arr = [];

        for (let song of songs) {
            for (let genre of song.genre)
            {
                genre_arr.push(genre);
            }
        }

        let trimmed_genre_arr = new Set();
        for (const genre of genre_arr)
        {
            if (!trimmed_genre_arr.has(genre))
            {
                genre_arr.push(genre);
                trimmed_genre_arr.add(genre);
            }
        }

        for (const genre of trimmed_genre_arr)
        {
            html += `<option value="${genre}" id="${genre}">${genre}</option>`;
        }

       document.querySelector("#genreDropDown").innerHTML = html;
    }
 }

 async function searchGenre() {
    const dropdown = document.getElementById("genreDropDown");
    const selectedGenre = dropdown.value;

    const response = await fetch("/api/songs");
    if (response.ok) {
       const songs = await response.json();
       let html = "";
       for (let song of songs)  {
            if (song.genre.includes(selectedGenre))
            {
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
        }
       document.querySelector("#table-rows").innerHTML = html;
    }
  }
