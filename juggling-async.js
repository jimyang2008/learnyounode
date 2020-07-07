const http = require('http');
const bl = require('bl');

var results = [];
var count = 0;
const total = 3;

//function readURL(i) {
//Array(3).fill().map((x,i)=>i).forEach(i => {
for (let i=0;i<total;i++) {
    //console.log(i);
    var url = process.argv[2+i];
    http.get(url, resp => {
        resp.setEncoding('utf8');
        resp.pipe(bl(function(err,data) {
            if ( err ) return console.error(err);
            results[i] = data.toString();
            count++;
            //console.log('i='+i);
            //console.log('count='+count);
            if ( count === total ) {
              for (var j=0; j<total; j++) {
                console.log(results[j]);
              }
            }
        }))
    }).on('error', err => {
        console.error('ERROR: '+err);
    });
//})
}

//for (var i=0;i<total; i++) {
//    readURL(i)
//}
