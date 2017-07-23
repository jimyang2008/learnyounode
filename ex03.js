var fs = require('fs');

if (process.argv.length <=2) {
    console.error("ERROR:input file is missing");
    process.exit(1)
}

var filePath = process.argv[2];

//var fileContentBuf = fs.readFileSync(filePath);
//var fileContentArray = fileContentBuf.toString().split('\n');
var fileContentString = fs.readFileSync(filePath,'UTF8');
var fileContentArray = fileContentString.split('\n');

console.log(fileContentArray.length-1);
