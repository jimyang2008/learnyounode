const http = require('http');

const concatStream = require('concat-stream');

http.get( process.argv[2], resp => {
    resp.pipe(concatStream(data => {
        const dataString = data.toString();
        console.log(dataString.length);
        console.log(dataString);
    }));
}).on('error', console.error);
