const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        console.log(err);
        return;
    }
    list.filter(item => path.extname(item) === '.'+process.argv[3]).forEach(v=> console.log(v));
});
