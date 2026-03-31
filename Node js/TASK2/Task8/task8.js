const http = require("http");

let jobs = [];
let idCounter = 1;

function processJob(job) {
    console.log(`Job ${job.id} → queued`);

    setTimeout(() => {
        job.status = "running";
        console.log(`Job ${job.id} → running`);

        const delay = Math.floor(Math.random() * 2000) + 2000;

        setTimeout(() => {
            job.status = "done";
            console.log(`Job ${job.id} → done`);
        }, delay);

    }, 2000);
}

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = parsedUrl.pathname;

    // POST /jobs
    if (req.method === "POST" && path === "/jobs") {
        const newJob = {
            id: idCounter++,
            type: "default",
            status: "queued"
        };

        jobs.push(newJob);
        processJob(newJob);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ id: newJob.id, status: newJob.status }));
    }

    else if (req.method === "GET" && path === "/jobs") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(jobs));
    }

    else if (req.method === "GET" && path.startsWith("/jobs/")) {
        const parts = path.split("/");
        const id = parseInt(parts[2]);

        if (isNaN(id)) {
            res.writeHead(400);
            return res.end("Invalid Job ID");
        }

        const job = jobs.find(j => j.id === id);

        if (!job) {
            res.writeHead(404);
            return res.end("Job not found");
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ id: job.id, status: job.status }));
    }

    else {
        res.writeHead(404);
        res.end("Route not found");
    }
});

server.listen(3000, () => 
  {
    console.log("Server running at http://localhost:3000");
  });
