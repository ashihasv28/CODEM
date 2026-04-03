const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/readfile') {
        fs.readFile('bigfile.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error reading file');
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    }

    else if (req.url === '/streamfile') {
        const readStream = fs.createReadStream('bigfile.txt', 'utf8');

        res.writeHead(200, { 'Content-Type': 'text/plain' });

        readStream.pipe(res);

        readStream.on('error', () => {
            res.writeHead(500);
            res.end('Error reading file');
        });
    }

    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
