module.exports = function(app){
    app.get('/form-add-news', function(req, res){
        app.app.controllers.admin.form_add_news(app, req, res)
    })

    app.post('/news/save', function(req, res){
        app.app.controllers.admin.save_news(app, req, res)
    })
}
