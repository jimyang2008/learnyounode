var fs = require('fs');
var pt = require('path');
module.exports = function (dirPath, extString, callback) {
    fs.readdir(dirPath, function (err,files){
        if (err) {
            return callback(err);
        }
        filteredFiles = files.filter(function(file) {
            return pt.extname(file) === "."+extString
        })
        callback(null, filteredFiles);
    })
}
