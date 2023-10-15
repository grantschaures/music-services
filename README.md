# Music Services

## A simple Express JS app using MongoDB to store data related to songs

This project was developed as part of the CS 290 Web development course at Oregon State University. It demonstrates the following functions:
* Create - Create a new song with the following attributes: Title, Artist, Release Date, Popularity Score (1-10), and Genre(s)
* Read - Read documents from a MongoDB database and display the information to the user
* Update - Update song info
* Delete - Delete a song

## How to install this project and run locally
1) Clone repository locally (git clone https://github.com/grantschaures/music-services.git)
2) Change into music-services directory (cd music-services)
3) Install dependencies (npm i)
4) In code editor, create environmental variables (.env) file
5) Initialize PORT to 3000 (or any other number)
6) Initialize MONGODB_URI to your unique MongoDB Cloud Atlas connection string (if you have not done so, create an account at https://www.mongodb.com/) - this will be in the format: mongodb+srv://<your username>:<your password>@cluster0.jqgtu0c.mongodb.net/
7) Once you're connected to MongoDB in your code editor, run npm start to run the app locally

## Usage
Run App: 
```npm start```
