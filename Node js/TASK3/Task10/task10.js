const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/image') {

        const filePath = "C:\\Users\\Ashiha S V\\OneDrive\\Pictures\\Screenshots\\image.jpg";

        const readStream = fs.createReadStream(filePath);

        res.writeHead(200, { 'Content-Type': 'image/jpeg' });

        readStream.on('error', (err) => {
            console.log(err);
            res.end('Error loading image');
        });

        readStream.pipe(res);

    } else {
        res.end('Page Not Found');
    }

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
