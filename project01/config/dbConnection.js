var mysql = require('mysql')

var connMySQl = function(){
    return mysql.createConnection({
        host: 'localhost',            
        user:  'root',
        password: 'moragas123',
        database: 'news_portal'
    })
}

module.exports = function(){
    return connMySQl
}

    