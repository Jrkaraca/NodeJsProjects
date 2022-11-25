var http = require('http');

var dt = require('./modules');
var server = http.createServer(function(req,res){
   res.writeHead(200, {'Content-Type': 'text/html'});
   const result = dt.datetime();
   res.write('Current Date and Time:');
   res.write(result);
   res.end();
});

server.listen(4000);