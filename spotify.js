
// var input1 = process.argv[2];

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


var Spotify = require('node-spotify-api');
var request = require("request"); 
var spotify = new Spotify({
   
  id:'57cb146e11664ddda02bca199410ae5f',
  secret:'821e8438a8234a1eac5d441b9528da19' 
});


spotify.search({ type: 'track', query: input2}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   var search=data.tracks.items[0]
   for(var i=0;i<search.artists.length;i++){
       console.log(" name: "+ search.artists[i].name)
   }
  console.log("Artist: " + search.album.artists[0].name); 
  console.log("Album: "+ search.album.name); 
  console.log("Name of song: "+ search.name); 
//   console.log("Preview Link: " + search.name); 

//   console.log( search); 
  });
