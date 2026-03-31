const http = require('http');

let active = 0;          
const LIMIT = 2;         
let queue = [];          
let id = 0;

function fakeDBCall(reqId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

function handleRequest(reqId, res) {
    console.log(`Request ${reqId}: processing`);
    const start = Date.now();

    fakeDBCall(reqId).then(() => {
        const time = Date.now() - start;
        console.log(`Request ${reqId}: done in ${time}ms`);

        res.end(`Request ${reqId} completed\n`);

        active--;

        if (queue.length > 0) {
            const next = queue.shift();
            active++;
            next();
        }
    });
}

const server = http.createServer((req, res) => {
    id++;
    const currentId = id;

    if (active < LIMIT) {
        active++;
        handleRequest(currentId, res);
    } 
    else {
        console.log(`Request ${currentId}: queued (waiting)`);
        queue.push(() => handleRequest(currentId, res));
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
