module.exports = function(app){
    
    app.get('/news-board', function(req, res){

        app.app.controllers.newsBoard.news_board(app, req, res)
    })

    app.get('/news', function(req, res){

        app.app.controllers.newsBoard.news(app, req, res)
    })
    
}

