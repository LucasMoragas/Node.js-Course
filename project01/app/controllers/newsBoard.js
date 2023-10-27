module.exports.news_board = function (app, req, res) {
    var connection = app.config.dbConnection()
    var newsModel = new app.app.models.NewsDAO(connection)

    newsModel.getNews(function (error, result) {
        res.render('./news/newsBoard.ejs', { news: result })
    })
}

module.exports.news = function (app, req, res) {
    var connection = app.config.dbConnection()
    var newsModel = new app.app.models.NewsDAO(connection)

    var news_id = req.query

    newsModel.getContent(news_id, function (error, result) {
        res.render('./news/news.ejs', { news: result })
    })
}