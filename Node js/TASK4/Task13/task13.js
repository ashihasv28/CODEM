const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/error', (req, res, next) => {
    const err = new Error("Something went wrong");
    err.status = 500;
    next(err);
});

app.get('/test', (req, res) => {
    res.json({ message: "Working fine" });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
        status: 404
    });
});

app.use((err, req, res, next) => {
    console.log("Error:", err.message);

    res.status(err.status || 500).json({
        error: err.message || "Something went wrong",
        status: err.status || 500
    });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
