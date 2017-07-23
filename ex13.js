var http = require('http')
var url = require('url')

if ( process.argv.length < 3 ) {
    console.error("ERROR: port is required");
    process.exit(1);
}

var port = process.argv[2];

server = http.createServer(function (req, resp) {
    if (req.method !== 'GET' ) {
        return resp.end('GET request only\n');
    }
    urlObj = url.parse(req.url, true);
    resp.writeHead(200,{'Content-Type':'application/json'});
    inputDate = new Date( urlObj.query.iso );
     
    var jsonObj = {};
    if ( urlObj.pathname == '/api/parsetime' && !isNaN(inputDate)) {
        jsonObj = {
            'hour': inputDate.getHours(),
            'minute': inputDate.getMinutes(),
            'second': inputDate.getSeconds()
        };
    } else if ( urlObj.pathname == '/api/unixtime' && !isNaN(inputDate)) {
        jsonObj = { 'unixtime': inputDate.getTime() };
    } else {
        jsonObj = { 'error' : `unsupported pathname ${urlObj.pathname}`};
    }
    resp.end(JSON.stringify(jsonObj)+'\n');

});

server.listen(port);
