var express = require('express')
var path = require('path')
var app = express()

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../client/public/index.html'))
})

app.listen(3000);
console.log("Listening on port 3000")
console.log(__dirname)