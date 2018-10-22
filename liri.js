//  var dotenv =require("dotenv").config();

//  console.log(dotenv)


// var moment = require('moment');
// moment().format();

// var spotify = new Spotify(keys.spotify);
// var Spotify = require('node-spotify-api');


// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }

// console.log(data); 
// });

var input1 = process.argv[2];

// Store all of the arguments in an array
var nodeArgs = process.argv;
var input2 = ''
// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {

        input2 = input2 + "+" + nodeArgs[i];

    }

    else {

        input2 += nodeArgs[i];

    }
}


if (input1 === "movie-this") {
    ombd(input2);

}



// Get all elements in process.argv, starting from index 3 to the end
// Join them into a string to get the space delimited address




 

function ombd(search) {
   var request = require("request");
    // Then run a request to the OMDB API with the movie specified
    request("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200 && search) {

            console.log("Title : " + JSON.parse(body).Title);
            console.log("Year movie released : " + JSON.parse(body).Year);
            console.log("The movie's rating is  : " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Ratings: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country : " + JSON.parse(body).Country);
            console.log("Language : " + JSON.parse(body).Language);
            console.log("Plot : " + JSON.parse(body).Plot);
            console.log("Actors : " + JSON.parse(body).Actors);

            // console.log('body: ', JSON.parse(body));
        } else{
            
            console.log("If you haven't watched ' Mr. Nobody, ' then you should: http://www.imdb.com/title/tt0485947/ ")
            console.log("It's on Netflix!")
        }
    });
}