var s = 0;
var l = process.argv.length;
if ( l > 2 ) {
    for (i=2; i< l; i++) {
        s += parseInt(process.argv[i]);
    }
}

console.log(s);
