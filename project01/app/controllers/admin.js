module.exports.form_add_news = function (app, req, res) {
    res.render('./admin/form_add_news.ejs', { validation: {}, news: {} })
}

module.exports.save_news = function (app, req, res) {
    var news = req.body

    req.assert('title', 'Title can not be empty').notEmpty()
    req.assert('abstract', 'Abstract can not be empty').notEmpty()
    req.assert('abstract', 'The abstract must be between 10 and 100 characters').len(10, 100)
    req.assert('author', 'Author name can not be empty').notEmpty()
    req.assert('news_date', 'The date can not be empty or with invalid characters').notEmpty().isDate({ format: 'YYYY-MM-DD' })
    req.assert('content', 'Content can not be empty').notEmpty()

    var errors = req.validationErrors()

    if (errors) {

        res.render('./admin/form_add_news.ejs', { validation: errors, news: news })

        return
    }

    var connection = app.config.dbConnection()
    var newsModel = new app.app.models.NewsDAO(connection)

    newsModel.saveNews(news, function (error, result) {
        res.redirect('/news-board')
    })
}