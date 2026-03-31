const http = require('http');

function parseJSON(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    throw new Error('Invalid JSON');
  }
}

function validateSchema(obj) {
  if (!obj.name || !obj.age || !obj.email) {
    throw new Error('Missing required fields');
  }
  return obj;
}

function transformData(obj) {
  return {
    name: obj.name.toUpperCase(),
    age: obj.age,
    email: 'xyz@gamil.com',
  };
}

function buildResponse(obj) {
  return { success: true, data: obj };
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/process') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const parsed = parseJSON(body);
        const valid = validateSchema(parsed);
        const transformed = transformData(valid);
        const response = buildResponse(transformed);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
      } catch (err) {
        
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });

    req.on('error', err => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Server error' }));
    });
  } 
  else {

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, error: 'Not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
