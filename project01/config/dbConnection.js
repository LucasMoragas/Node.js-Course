var mysql = require('mysql')

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',            
        user:  'root',
        password: 'moragas123',
        database: 'news_portal'
    })
}

    