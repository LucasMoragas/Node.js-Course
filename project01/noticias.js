var http = require('http');

var server = http.createServer(function(req, res){
    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Portal de notícias de tecnologia com node.</body></html>");
    }else if(categoria == '/moda'){
        res.end("<html><body>Portal de notícias de moda com node.</body></html>");
    }else{
        res.end("<html><body>Portal de notícias com node.</body></html>");
    }

});

server.listen(3000);