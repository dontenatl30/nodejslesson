const http = require("http");

const fs = require("fs");

http.createServer((req, res) => {
fs.readFile("demo.html", (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
})
}).listen(8081 , () => {
    
    console.log('app is running at http://localhost:8081/');
});
// or

// }).listen(8081)
    
//     console.log('app is running at http://localhost:8081/');

// creat aka write a new file 

fs.writeFile('myNewFile.txt', 'Hello NodeJS FS!', (err) => {
    if (err) throw err;
    console.log('Saved!');
})

// append a file

fs.appendFile('myNewFile.txt', 'Node Core Modules are the best!', (err) => {
    if (err) throw err;
    console.log('Updated!');
});

// delete a file

// fs.unlink('delme.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted!');
// })