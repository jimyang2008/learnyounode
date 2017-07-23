var map = require('through2-map')
var http = require('http')

if ( process.argv.length < 3 ) {
    console.error("ERROR: port is required");
    process.exit(1);
}

var port = process.argv[2];

server = http.createServer(function (req, resp) {
    if (req.method !== 'POST' ) {
        return resp.end('POST request only\n')
    }
    var upper = map({wantStrings: true}, function(str) {
        return str.toUpperCase();
    });
    req.pipe(upper).pipe(resp);
});

server.listen(port);
