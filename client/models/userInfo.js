const fs = require('fs');
var path = require('path')
var https = require('https');

var apiURL = 'https://na.api.pvp.net/api/lol/na/v1.4/';
var apiToken = "?api_key=dbada37c-b6c0-43fe-bf1f-f1819507b3d7";

export function fetchSummonerInfo(summonerName) {
	return new Promise(function(resolve, reject) {
		https.get(apiURL + 'summoner/by-name/' + summonerName + apiToken, function(res) {
			var body = "";
			res.on('data', function(data) {
				body += data
			})
			res.on('end', function() {
				resolve(JSON.parse(body));
			})
			res.on('error', function(e) {
				reject(e);
			})
		})
	})
}