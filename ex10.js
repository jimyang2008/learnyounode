var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
    var data = strftime('%Y-%m-%d %H:%M');
    //console.log(`reply: ${data}`);
    socket.end(data+"\n");
})

if ( process.argv.length < 3 ) {
    console.error("ERROR: listening port is required");
}
port = process.argv[2];
//console.log(`Start listening to ${port} ... `);
server.listen(port);
