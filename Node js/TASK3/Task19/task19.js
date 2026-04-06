const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/csv") {

        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=data.csv");

        const stream = fs.createReadStream("data.csv");

        stream.pipe(res);

        stream.on("error", (err) => {
            console.log("Error:", err);
            res.statusCode = 500;
            res.end("Server Error");
        });

    } else {
        res.statusCode = 404;
        res.end("Route not found");
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
