module.exports = function(app){
    
    app.get('/news-board', function(req, res){

        var connection = app.config.dbConnection()
        var newsModel = new app.app.models.NewsDAO(connection)

        newsModel.getNews(function(error, result){
            res.render('./news/newsBoard.ejs', {news: result})
        })
    })
    
}

