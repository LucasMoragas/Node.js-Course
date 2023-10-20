module.exports = function(app){
    
    

    app.get('/news-board', function(req, res){

        var connection = app.config.dbConnection()
        var newsModel = app.app.models.newsModel

        newsModel.getNews(connection, function(error, result){
            res.render('./news/newsBoard.ejs', {news: result})
        })
    })
    
}

