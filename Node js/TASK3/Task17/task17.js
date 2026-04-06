const http = require("http");

const server = http.createServer((req, res) => {
    
    if (req.url === "/favicon.ico") {
        res.statusCode = 204;
        return res.end();
    }

    const startTime = Date.now();

    let responseText = "";

    if (req.url === "/" && req.method === "GET") {
        responseText = "Home Page";
    } else if (req.url === "/api" && req.method === "GET") {
        responseText = "API Route";
    } else {
        res.statusCode = 404;
        responseText = "Not Found";
    }

    const responseTime = Date.now() - startTime;

    res.setHeader("X-Powered-By", "Node.js");
    res.setHeader("X-Response-Time", `${responseTime}ms`);
    res.setHeader("Content-Type", "text/html");

    console.log("Response Headers Sent:");
    console.log("X-Powered-By: Node.js");
    console.log(`X-Response-Time: ${responseTime}ms`);
    console.log("Content-Type: text/html");
    console.log("--------------------------");

    res.end(responseText);
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
