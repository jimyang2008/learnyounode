var http = require('http');
const bl = require('bl');

var count = 0;
var total = 3;
var results = [];

// IMPORTANT: scope of function parameter

function readURL(i) {
    var url = process.argv[2+i];
    //console.log(`Start reading ${i}:${url} ...`);
    http.get(url,function(res){
        res.setEncoding('utf8');
        res.pipe(bl(function(err, data) {
            if (err) return console.error(err);
            //console.log(`Done reading ${count}`);
            results[i] = data.toString();
            count++;
            if ( count == total ) {
                for (var j=0; j<total; j++) {
                    console.log(results[j]);
                }
            }
        }));
    }).on('error', function(err){
        console.error('ERROR: '+err.message);
    });
}
for (var i=0; i< total; i++) {
    readURL(i)
}
