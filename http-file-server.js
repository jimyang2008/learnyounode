const http = require('http')

const port = process.argv[2]

const filepath = process.argv[3]

const fs = require('fs')

const server = http.createServer( (req, resp) => {
    // request handling 
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    const stream = fs.createReadStream(filepath,'utf8');
    stream.on('open', function() {
        stream.pipe(resp);
    });
    stream.on('error', err => {
        resp.end(err);
    });
});

server.listen(port)
