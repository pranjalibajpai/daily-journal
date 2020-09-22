const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//port setup
const port = 3000 || process.env.PORT;

//middleware bodyparser
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//ejs template
app.set('view engine', 'ejs');

//get request
app.get('/', function(request, response){
    response.send('Server is up & running!');
});

//port connection
app.listen(port, function(){
    console.log("Listening to port");
});