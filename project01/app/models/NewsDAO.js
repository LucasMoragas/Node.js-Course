function NewsDAO(connection){
    this._connection = connection
}

NewsDAO.prototype.getNews = function(callback){
    this._connection.query('select * from news', callback)
}

NewsDAO.prototype.getContent = function(callback){
    this._connection.query('select * from news where news_id = 2', callback)
}

NewsDAO.prototype.saveNews = function(news, callback){
    this._connection.query('insert into news set ?', news, callback)
}

module.exports = function(){
   
    return NewsDAO
}