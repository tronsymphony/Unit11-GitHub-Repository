var http = require('http');

//create a server object:
http.createServer(function (req, res) {

	res.writeHead(200, {'Content-Type': 'text/html'});

	res.write('Hello World, my name is Nityananda Hoyos'); 

    res.end(); //end the response

}).listen(8001); //the server object listens on port 8080