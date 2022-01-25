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

//create routes for the admin section
//get an instance of the router
var adminRouter = express.Router();
//admin main page/ the dashboard (http://localhost:PORT/admin)
adminRouter.get('/', function(req,res){
    res.send("I am the dashboard!")
});

//users page (http://localhost:PORT/admin/users)
adminRouter.get('/', function(req,res){
    res.send("I show all the users!");
});

//posts page (http://localhost:PORT/admin/posts)
adminRouter.get('/', function(req,res){
    res.send("I show all the posts");
});

//apply all the routes to our application
app.use('/admin', adminRouter);

//start the server
app.listen(PORT);

console.log('Express server running at http://127.0.0.1:'.PORT);