const http = require("http");

const dt = new Date();

const myServer = http.createServer((req, res) => {
    const dt = new Date();
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("the date and time are currently: " + dt.toDateString() + `${dt.getHours()}:${dt.getMinutes()}:`)
    res.end();
}).listen(8080);

console.log("the server is reunning at http://localhost:8080");