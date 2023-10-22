module.exports = function(){
    
    this.getNews = function(connection, callback){
        connection.query('select * from news', callback)
    }

    this.getContent = function(connection, callback){
        connection.query('select * from news where news_id = 2', callback)
    }

    this.saveNews = function(news, connection, callback){
        connection.query('insert into news set ?', news, callback)
    }

    return this
}