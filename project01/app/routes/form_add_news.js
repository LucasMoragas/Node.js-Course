module.exports = function(app){
    app.get('/form-add-news', function(req, res){
        res.render('./admin/form_add_news.ejs')
    })
}
