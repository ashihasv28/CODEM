const http = require('http');

let count = 0;

const server = http.createServer((req, res) => {

    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${req.method} ${req.url}`);

    if (req.url === '/secure') {

        if (req.headers['x-auth'] !== 'secret123') {
            res.writeHead(401);
            res.end('Unauthorized');
            return;   
        }

        console.log("Auth passed");

        count++;
        console.log(`Rate limit: ${count}/5`);
        
        console.log("Response sent");
        res.end("Response sent");
    }
    else{
       res.writeHead(200);
       res.end("Can't find the server");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
