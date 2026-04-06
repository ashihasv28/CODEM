const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    if (req.url === "/favicon.ico") {
        res.statusCode = 204;
        return res.end();
    }

    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    if (Object.keys(query).length === 0) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify({ message: "No query params found" }));
    }

    console.log("Query received:");
    for (let key in query) {
        console.log(`${key} = ${query[key]}`);
    }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(query));

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
