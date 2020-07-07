const http = require('http');

http.get(process.argv[2], (resp) => {
    resp.setEncoding('utf8');
    let rawData = '';
    resp.on('data', data => console.log(data) );
    resp.on('error', data => console.error("ERROR: "+data));
}).on('error', err => {
    console.error(`ERROR: ${err}`)
});;
