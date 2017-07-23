var http = require('http');
var fs = require('fs');

if ( process.argv.length < 4 ) {
    console.error("ERROR: require port and file to serve");
    process.exit(1);
}

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (req, resp) {
    resp.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(filePath).pipe(resp);
});

server.listen(port);

