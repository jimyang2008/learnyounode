var http = require('http');
const bl = require('bl');


var url = process.argv[2];

http.get(url,function(res){
    res.setEncoding('utf8');
    res.pipe(bl(function(err, data) {
        if (err) return console.error(err);
        var dataString = data.toString();
        console.log(dataString.length);
        console.log(dataString);
    }));
}).on('error', function(err){
    console.error('ERROR: '+err.message);
});
