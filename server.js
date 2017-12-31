var express = require('express')
var path = require('path')
var compression = require('compression')
require('isomorphic-fetch')
var city = require('./lib/cityResponse.json')
var weather = require('./lib/weatherResponse.json')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()

app.use(compression())
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory in React Router works
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.info('Production Express server running at localhost:', PORT)
})