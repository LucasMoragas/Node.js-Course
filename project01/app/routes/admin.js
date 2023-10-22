module.exports = function(app){
    app.get('/form-add-news', function(req, res){
        res.render('./admin/form_add_news.ejs')
    })

    app.post('/news/save', function(req, res){
        var news = req.body
        
        var connection = app.config.dbConnection()
        var newsModel = app.app.models.newsModel

        newsModel.saveNews(news, connection, function(error, result){
            res.redirect('/news-board')
        })
    })
}
