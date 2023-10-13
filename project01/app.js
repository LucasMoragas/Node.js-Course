var express = require('express')
var msg = require('./test_modules')

var app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('./home/index.ejs')
})

app.get('/news', function(req, res){
    res.render('./noticias/noticias.ejs')
})

app.get('/form_add_news', function(req, res){
    res.render('./admin/form_add_news.ejs')
})


app.listen(3000, function(){
    console.log(msg())
})