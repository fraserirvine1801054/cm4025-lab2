//load the express package and create our app

var express = require('express');
var app = express();

const PORT = process.env.PORT || 8080;

//set the port based on environment
var port = PORT;

//send our index.html file to the user for the home page

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//start the server
app.listen(PORT);

console.log('Express server running at http://127.0.0.1:'.PORT);