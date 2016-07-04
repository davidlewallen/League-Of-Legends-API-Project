// import fetch from 'isomorphic-fetch';

// var myHeaders = new Headers();

var express = require('express')
var app = express();

var apiURL = 'https://na.api.pvp.net/api/lol/na/v1.4/';
var apiToken = '?api_key=dbada37c-b6c0-43fe-bf1f-f1819507b3d7';


// export function fetchSummonerInfo() {
// 	return fetch(apiURL + 'summoner/by-name/Faxious' + apiToken, {
// 		method: 'GET',
// 		mode: 'no-cors'
// 	})
// 		.then((data) => console.log(JSON.stringify(data)))
// 		// .catch((e) => console.log(e))
// 		// .then((res) => console.log(res))
// }
// 

// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// })

export function fetchSummonerInfo() {
	app.get(apiURL + 'summoner/by-name/Faxious' + apiToken, middle,  function(req, res) {
		let body = ""
		res.on('data', function(data) {
			body += data;
		})
		res.on('end', function() {
			console.log(body);
		})
	})
}

function middle(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
}