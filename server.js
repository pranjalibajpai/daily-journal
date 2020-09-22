const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

//port setup
const port = 3000 || process.env.PORT;

//content
const home_content = "Welcome! to Daily-Journal. Get Started By Creating a new post.";

//middleware bodyparser
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//ejs template
app.set('view engine', 'ejs');

//creates a route to home page & renders home.ejs
app.get('/', function(request, response){
    //now we need to add content to home : Pass a JS object
    response.render("home", {startcontent: home_content});
    //response.render("home");
    //response.render(__dirname + '/views/home.ejs');
});

//port connection
app.listen(port, function(){
    console.log("Listening to port");
});