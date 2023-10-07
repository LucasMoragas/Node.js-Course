var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/tech', function(req, res){
    res.render('./section/tech.ejs')
})


app.get('/', function(req, res){
    res.send('<html><body>News portal with Node!</body></html>')
})


app.listen(3000, function(){
    console.log("Server running")
})