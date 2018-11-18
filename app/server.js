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
