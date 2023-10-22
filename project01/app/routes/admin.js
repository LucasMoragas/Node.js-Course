module.exports = function(app){
    app.get('/form-add-news', function(req, res){
        res.render('./admin/form_add_news.ejs')
    })

    app.post('/news/save', function(req, res){
        var news = req.body
        
        var connection = app.config.dbConnection()
        var newsModel = new app.app.models.NewsDAO(connection)

        newsModel.saveNews(news, function(error, result){
            res.redirect('/news-board')
        })
    })
}
