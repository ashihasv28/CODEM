const http = require('http');

let total = 0, success = 0, error = 0, totalTime = 0;

function avgTime() {
  return total ? Math.round(totalTime / total) + 'ms' : '0ms';
}

const server = http.createServer((req, res) => {
  const start = Date.now();
  total++;

  if (req.url === '/hello') {
    const delay = Math.floor(Math.random() * 400) + 100; // 100–500ms
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World');
      success++;
      totalTime += Date.now() - start;
    }, delay);

  } else if (req.url === '/fail') {
    res.writeHead(500);
    res.end('Error!');
    error++;
    totalTime += Date.now() - start;

  } else if (req.url === '/stats') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ totalRequests: total, successCount: success, errorCount: error, avgResponseTime: avgTime() }));

  } else {
    res.writeHead(404);
    res.end('Not Found');
    error++;
    totalTime += Date.now() - start;
  }
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
