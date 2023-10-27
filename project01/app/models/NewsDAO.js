function NewsDAO(connection){
    this._connection = connection
}

NewsDAO.prototype.getNews = function(callback){
    this._connection.query('select * from news order by creation_date desc', callback)
}

NewsDAO.prototype.getContent = function(news_id ,callback){
    this._connection.query(`select * from news where news_id = ${news_id.news_id}`, callback)
}

NewsDAO.prototype.saveNews = function(news, callback){
    this._connection.query('insert into news set ?', news, callback)
}

NewsDAO.prototype.get5Last = function(callback){
    this._connection.query('select * from news order by creation_date desc limit 5', callback)
}

module.exports = function(){
   
    return NewsDAO
}