var dotenv = require("dotenv").config();
var keys = require("./keys.js")
var Spotify = require('node-spotify-api');
var moment = require('moment');
var request = require("request");
var fs = require("fs");
var bandsintown = require("bandsintown")
//  console.log(dotenv)
moment().format();


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


switch(input1){
    case "movie-this": ombd(input2);break;
    case "spotify-this":songify(input2);break;
    case "concert-this" : BandsInTown(input2);break;
    case "do-what-it-says": do_what_it_says();break;
    default: console.log("Invalid Response")
}



function songify(search) {
    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: search }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var searching = data.tracks.items[0]
        var artistinfoArray = [
            "Artists: " + searching.artists[0].name,
            "Name of song: " + searching.name,
            "Album: " + searching.album.name,

        ].join("\n");

        console.log(artistinfoArray)

    });
}



function ombd(search) {
    var request = require("request");
    // Then run a request to the OMDB API with the movie specified
    request("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200 && search) {

            var movieinfoArray = [
                "Title : " + JSON.parse(body).Title,
                "Year movie released : " + JSON.parse(body).Year,
                "The movie's rating is  : " + JSON.parse(body).imdbRating,
                "Rotten Tomatoes Ratings: " + JSON.parse(body).Ratings[1].Value,
                "Country : " + JSON.parse(body).Country,
                "Language : " + JSON.parse(body).Language,
                "Plot : " + JSON.parse(body).Plot,
                "Actors : " + JSON.parse(body).Actors,
            ].join("\n")
            console.log(movieinfoArray);
        } else {

            console.log("If you haven't watched ' Mr. Nobody, ' then you should: http://www.imdb.com/title/tt0485947/ ", "\n\n", "It's on Netflix!")

        }
    });
}

function BandsInTown(search) {

    var URL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
    request(URL, function (error, response, body) {
        var data = JSON.parse(body)
        //    console.log(data)
        var date = data[0].datetime;
        var convertDate = moment(date, "YYYY/MM/DD").format("MM/DD/YYYY");
        if (!error && response.statusCode === 200 && search) {

            var bandsintownInfoArray = [
                "Name of venue: " + data[0].venue.name,
                "Name of city: " + data[0].venue.city,
                "Date of Event: " + convertDate
            ].join("\n")
            console.log(bandsintownInfoArray)
        } else {
            console.log('Error occurred: ' + error);

        }

    });
}

function do_what_it_says() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }

        var dataArr = data.split(',');

        // console.log(dataArr[0],dataArr[1])
        if (dataArr[0] === "spotify-this-song") {
            songify(dataArr[1])
        }else if(dataArr[0]==="movie-this"){
            ombd(dataArr[1])
        }

    });


}

