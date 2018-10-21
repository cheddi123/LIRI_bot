require("dotenv").config();

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

var moment = require('moment');
moment().format();




var spotify = new Spotify(keys.spotify); 
var Spotify = require('node-spotify-api');



spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });





// // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// var request = require("request");


// // Get all elements in process.argv, starting from index 3 to the end
// // Join them into a string to get the space delimited address

// var search = process.argv.slice(3).join(" ");

// // Then run a request to the OMDB API with the movie specified
// request("http://www.omdbapi.com/?t=" + search +"&y=&plot=short&apikey=trilogy", function(error, response, body) {

//   // If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//     console.log('body: ', JSON.parse(body));
//   }
// });
