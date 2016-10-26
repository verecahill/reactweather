var express = require("express");

var app = express();
const PORT = process.env.PORT || 3000; // heorku setting

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
