var http = require('http')

http.createServer(
    function(req, res){
        res.end("olá, mundo")
}).listen(3002)
//http:/localhost:8081

console.log("O servidor está funcionanado")