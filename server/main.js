var express = require('express');
var path = require('path');
var http = require('http');
var https = require('https')
var fs = require('fs')

var app = express();

var apiToken = "dbada37c-b6c0-43fe-bf1f-f1819507b3d7";

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../client/public/index.html'))
})

app.get('/getChampions', function(req, res) {
	console.log("app.get /getChampions")

	https.get("https://na.api.pvp.net/api/lol/na/v1.2/champion?api_key=" + apiToken, function(res) {
		console.log("Http request");

		var body = "";
		res.on('data', function(data) {
			body += data;
		})
		res.on('end', function() {
			console.log(body)
			fs.writeFileSync("championData.txt", body)
		})
		res.on('error', (e) => console.log(e) )
	})
})
app.listen(3000);
console.log("Listening on port 3000")
console.log(__dirname)