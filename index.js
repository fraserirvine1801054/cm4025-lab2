var http = require("http");
fs = require('fs');
const PORT = process.env.PORT || 8080;


http.createServer(function (request, response){
    //send the http header
    //http status: 200 : OK
    //Content Type: text/plain
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': "*"
    });
    var readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(response);
    //send the response body as "Hello World"
    //response.end('Hello World\n');
}).listen(PORT);



//console will print the message
console.log('Server running at http://127.0.0.1:8080/');

