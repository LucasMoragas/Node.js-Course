module.exports = function(app){
    
    

    app.get('/news', function(req, res){

        var connection = app.config.dbConnection()
        var newsModel = app.app.models.newsModel

        newsModel.getContent(connection ,function(error, result){
            res.render('./news/news.ejs', {news: result})
        })
    })
    
}

