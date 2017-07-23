var filteredReadDir = require('./ex06_module.js');

if (process.argv.length < 4) {
    console.error("input file and extension is required");
    process.exit(1);
}

var dirPath = process.argv[2];
var extString = process.argv[3];

filteredReadDir(dirPath,extString,function(err,files){
    if (err) return console.error("ERROR:"+err);
    for (var i=0; i<files.length; i++) {
        console.log(files[i]);
    }
})
