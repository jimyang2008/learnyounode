const http = require('http')
const url = require('url')

const server = http.createServer((req,resp) => {
  try {
    const reqUrl = url.parse(req.url,true)
    const isoStr = reqUrl.query.iso;
    const dd = new Date(isoStr)
    if (reqUrl.pathname === '/api/parsetime') {
        resp.writeHead(200, {'Content-Type':'application/json'})
        console.log('dd='+dd)
        const ddstr = JSON.stringify({'hour': dd.getHours(), 'minute': dd.getMinutes(), 'second': dd.getSeconds()},null,'  ')
        console.log('ddstr='+ddstr)
        resp.end(ddstr)
    } else if (reqUrl.pathname === '/api/unixtime') {
        resp.writeHead(200, {'Content-Type':'application/json'})
        const unixtimeStr = JSON.stringify({'unixtime': dd.getTime()});
        console.log(unixtimeStr);
        resp.end(unixtimeStr);
    } else {
        resp.end('unknown URL:'+reqUrl.pathname)
    }
  } catch (err) {
      console.error(err);
  }
}).on('error', err => {
    console.error("ERROR: "+err)
})

server.listen(process.argv[2]);
