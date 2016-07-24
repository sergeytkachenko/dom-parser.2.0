let proxy = require('./proxy');

var express = require('express')
var http = require('http');
var app = express();
let cheerio = require('cheerio');

var request = require('request');

function appendBaseTag(htmlString, baseUrl) {
	var $ = cheerio.load(htmlString);
	$('head').prepend(`<base href="${baseUrl}" />`);
	return $.html();
}

app.get('/', function (req, response) {
	request.get(req.query.url, function (err, res, body) {
		if (!res || !res.headers) {
			return response.send(JSON.stringify(err));
		}
		for (var key in res.headers) {
			var value = res.headers[key];
			response.setHeader(key, value);
		}
		let dom = proxy.getDomFromHtml(body, req.query.url);
		//body = appendBaseTag(body, req.query.url);
		response.send(body || JSON.stringify(err));
	});
});
 
app.listen(3000);