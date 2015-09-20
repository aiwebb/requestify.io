var express = require('express')
var _       = require('lodash')
var winston = require('winston')
var request = require('request')
var marked  = require('marked')
var fs      = require('fs')
var app     = express()

winston.add(winston.transports.File, {filename: 'activity.log'})

app.all('/', function (req, res) {
	if (req.query.options) {
		winston.info('request')
		var options = JSON.parse(req.query.options)
		request(options).pipe(res)
	}
	else {
		winston.info('readme')
		fs.readFile('markdown.css', 'utf-8', function(err, css) {
			if (err) {
				winston.info('error')
				throw err
			}

			var style = '<style type="text/css">' + css + '</style>'

			fs.readFile('./README.md', 'utf-8', function(err, markdown) {
				if (err) {
					winston.info('error')
					throw err
				}

				var html = style + marked(markdown)
				res.status(200).send(html)
			})
		})
	}
})

var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)
})