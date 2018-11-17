var PATH = require('path');
var express = require('express');
var parser = require('body-parser');


var app = express();
var PORT = process.env.PORT || 8080;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, () => {
  console.log("App listening on http://localhost:" + PORT);
});


const friendData = require('./data/friends.js');


// var data = {
//   'name': ($('name').val()),
//   'email': ($('email').val()),
//   'photo': ($('yrface').val()),
//   'scores': []
// };
// $('#enter').click((event) => {
//   event.preventDefault();

//   var q1 = $('input[name="q1"]:checked').val();
//   var q2 = $('input[name="q2"]:checked').val();
//   var q3 = $('input[name="q3"]:checked').val();
//   var q4 = $('input[name="q4"]:checked').val();
//   var q5 = $('input[name="q5"]:checked').val();
//   var q6 = $('input[name="q6"]:checked').val();
//   var q7 = $('input[name="q7"]:checked').val();
//   var q8 = $('input[name="q8"]:checked').val();
//   var q9 = $('input[name="q9"]:checked').val();
//   var q10 = $('input[name="q10"]:checked').val();

//   data.scores.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10);
//   console.log(data);
//   friendData.push(data);

// });
