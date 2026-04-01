const http = require("http");

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(["Arun", "Priya", "Kiran"]), 500);
  });
}

function getOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([101, 102, 103, 104]), 400);
  });
}

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/summary") {
    Promise.all([getUsers(), getOrders()])
      .then(([users, orders]) => {
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            users,
            orders,
            totalUsers: users.length,
            totalOrders: orders.length,
          })
        );
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
