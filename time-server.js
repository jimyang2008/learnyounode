const net = require('net');

function myListener(socket) {

    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth()+1).toString().padStart(2,'0');
    const day = date.getDate().toString().padStart(2,'0');
    const hour = date.getHours().toString().padStart(2,'0');
    const minute = date.getMinutes().toString().padStart(2,'0');

    socket.end(`${year}-${month}-${day} ${hour}:${minute}\n`);
}

const server = net.createServer(myListener);

server.listen(process.argv[2]);
