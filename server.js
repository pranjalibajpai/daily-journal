const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

//port setup
const port = 3000 || process.env.PORT;

//content
const home_content =
  "Welcome to Daily-Journal. Get Started By Creating a New Post!";
const about_content =
  "Hi! I am Pranjali. I am a third year undergrad at IIT Ropar.";
const contact_content =
  "Follow me on Linkedin - pranjali-bajpai Github - pranjalibajpai";
let posts = [];

//middleware bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//ejs template
app.set("view engine", "ejs");

//GET requests
//creates a route to home page & renders home.ejs and pass a JS object to add content
app.get("/", function (request, response) {
  response.render("home", { startContent: home_content, posts: posts });
});

app.get("/about", function (request, response) {
  response.render("about", { aboutContent: about_content });
});

app.get("/contact", function (request, response) {
  response.render("contact", { contactContent: contact_content });
});

app.get("/compose", function (request, response) {
  response.render("compose");
});

//POST requests
app.post("/compose", function (request, response) {
  const post = {
    title: request.body.postTitle,
    content: request.body.postContent,
  };
  posts.push(post);
  response.redirect("/");
});

//port connection
app.listen(port, function () {
  console.log("Listening to port");
});
