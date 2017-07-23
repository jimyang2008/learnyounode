var http = require('http');

var url = process.argv[2];

http.get(url,function(res){
    var lines= [];
    res.setEncoding('utf8');
    res.on('data', function(data) {
        lines.push(data);
    });
    res.on('end', function() {
        lines.forEach(function (line) {
            console.log(line);
        })
    });
}).on('error', function(err){
    console.error('ERROR: '+err.message);
});
