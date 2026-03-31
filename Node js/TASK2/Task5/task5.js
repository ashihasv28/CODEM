const http = require("http");

function unstableDB() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.7; 

        setTimeout(() => {
            if (success) {
                resolve(["data1", "data2", "data3"]);
            } else {
                reject("DB Error");
            }
        }, 300);
    });
}

function fallbackData() {
    return ["cached1", "cached2"];
}

async function getDataWithRetry() {
    const delays = [500, 1000, 2000];

    for (let i = 0; i < 3; i++) {
        try {
            const data = await unstableDB();
            return { source: "db", data };
        } catch (err) {
            if (i < 2) {
                console.log(`Attempt ${i + 1} failed — retrying in ${delays[i]}ms`);
                await new Promise(res => setTimeout(res, delays[i]));
            } else {
                console.log(`Attempt 3 failed — using fallback`);
                return { source: "cache", data: fallbackData() };
            }
        }
    }
}

const server = http.createServer(async (req, res) => {
    if (req.method === "GET" && req.url === "/data") {
        const result = await getDataWithRetry();

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
