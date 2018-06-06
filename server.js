var express = require('express');
var burger = require('./models/burger.js');
var bodyParser = require('body-parser')
//var router = express.Router();
var methodOverride = require('method-override')
var exphbs = require('express-handlebars');
var app = express();

var PORT = process.env.PORT || 8080 


app.use(express.static('public'));

//Parse app 
app.use(bodyParser.urlencoded({ extended: true}));

//Parse application/json
app.use(bodyParser.json());

//Handlebars
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set("view engine", "handlebars")

var routes = require('./controllers/burgers_controller.js')
app.use('/',routes);

//Start server
app.listen(PORT, function(){
  console.log("Server listening on: http://localhost:" + PORT)
})
