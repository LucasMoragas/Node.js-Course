var dbConnection = require('../../config/dbConnection.js')

module.exports = function(app){

    var connection = dbConnection()

    app.get('/news-board', function(req, res){

        connection.query('select * from news',function(error, result){
            res.render('./news/newsBoard.ejs', {news: result})
        })
    })
}

