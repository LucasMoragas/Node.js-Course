module.exports = function(app){
    app.get('/news-board', function(req, res){
        res.render('./news/newsBoard.ejs')
    })
}

