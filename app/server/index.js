var path = require('path')
var fs = require('fs')
var express = require('express')
var https = require('https')

var certOptions = {
    key: fs.readFileSync(path.resolve('/Users/nipasuma/Projects/invisble_pen/app/certs/trusted-openssl/server.key')),
    cert: fs.readFileSync(path.resolve('/Users/nipasuma/Projects/invisble_pen/app/certs/trusted-openssl/server.crt'))
}

var app = express()

app.get('/', (req, res) => res.send('Hello World!'))

var server = https.createServer(certOptions, app).listen(443)