const http = require('http')
const map = require('through2-map')

var toUpper = map( chunk => chunk.toString().toUpperCase());

const server = http.createServer((req, resp) => {
    if (req.method === 'POST') {
        req.pipe(toUpper).pipe(resp)
    }
});

server.listen(process.argv[2])
