var fs = require('fs');

if (process.argv.length <= 2 ) {
    console.error("ERROR: input file missing");
    process.exit(1);
}
var filePath =  process.argv[2]

fs.readFile(filePath,'utf8',function doneReading(err, fileContent) {
    if (err) {
        console.error(err);
        return 1
    }
    var l = fileContent.split('\n').length - 1;
    console.log(l)
})
