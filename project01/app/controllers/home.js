module.exports.index = function(app, req, res){

    var connection = app.config.dbConnection()
    var newsModel = new app.app.models.NewsDAO(connection)

    newsModel.get5Last(function(error, result){
        res.render('./home/index.ejs', {news : result})
    })

}