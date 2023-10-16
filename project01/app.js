var app = require('./config/server.js')

var newsRoute = require('./app/routes/news.js')(app)

var homeRoute = require('./app/routes/home.js')(app)

var formAddRoute = require('./app/routes/form_add_news.js')(app)

app.listen(3000, function(){
    console.log('Server ON')
})