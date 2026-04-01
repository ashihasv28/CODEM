const http = require("http");

const users = ["Arun", "Priya", "Kiran"];
const products = ["Laptop", "Phone", "Tablet"];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    if (req.url === "/users") {
      res.statusCode = 200;
      res.end(JSON.stringify({ users }));
    } else if (req.url === "/products") {
      res.statusCode = 200;
      res.end(JSON.stringify({ products }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Not found" }));
    }
  } else {
    res.statusCode = 405; 
    res.end(JSON.stringify({ error: "Method not allowed" }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
