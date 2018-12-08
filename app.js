var express = require('express')
var app = express()
var linkPreview = require("link-preview")
var PORT = process.env.PORT || 8080;

var url = 'https://www.youtube.com/watch?v=6KUaMddjJy4'
linkPreview.parse(url)
.then(res => console.log(res))
.catch(err => console.log(err));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen((PORT) => {
  console.log('Listening on PORT:' + PORT );
});
