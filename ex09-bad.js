var http = require('http');
const bl = require('bl');

var count = 0;
var total = 3;
var results = [];

/* NOTE:
 * Variables declared with var do not have block scope. Variables introduced
 * with a block are scoped to the containing function or script, and the
 * effects of setting them persist beyond the block itself. In other words,
 * block statements do not introduce a scope 
 */
//for (let i=0; i< total; i++) { // this WORKS!
for (var i=0; i< total; i++) { // this FAILS!
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
