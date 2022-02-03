var express = require('express');

var app = express();
var port = 2022

app.use(express.static("./"));

app.listen(port, () => console.log("Server start on port: " + port))

app.get('/', (req, res) => {

  var word= req.query.word;
  var query= require('./word');
  query.queryWord(word, res);
  
})

app.get('/Dictionary', function(req, res) {
  var path = require('path');
  res.sendFile(path.join(__dirname, '/dict.html'));
})