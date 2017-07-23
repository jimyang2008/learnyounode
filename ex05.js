var fs = require('fs');
var pt = require('path');

if (process.argv.length < 4) {
    console.error("input file and extension is required");
    process.exit(1);
}

var dirPath = process.argv[2];
var extString = "."+process.argv[3];

fs.readdir(dirPath, function (err,files){
    if (err) {
        console.error("ERROR:",err);
        return 1
    }
    files.forEach(function (file) {
        if ( pt.extname(file) == extString ) {
            console.log(file);
        }
    })

})
