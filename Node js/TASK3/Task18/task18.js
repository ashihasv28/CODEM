const http = require("http");
const fs = require("fs").promises;
const url = require("url");

const server = http.createServer(async (req, res) => {

    if (req.url === "/favicon.ico") {
        res.statusCode = 204;
        return res.end();
    }

    try {
    
        const parsedUrl = url.parse(req.url, true);
        const name = parsedUrl.query.name || "Guest";

        let data = await fs.readFile("template.html", "utf-8");

        data = data.replace("{{username}}", name);

        res.setHeader("Content-Type", "text/html");
        res.end(data);

    } catch (err) {
        res.statusCode = 500;
        res.end("Server Error");
        console.log(err);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
