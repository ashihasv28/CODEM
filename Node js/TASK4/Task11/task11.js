const express = require('express');
const app = express();
const PORT = 3000;

const VALID_TOKEN = "12345";

function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];

    console.log("Auth Attempt, Token:", token);

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access"
        });
    }

    if (token !== VALID_TOKEN) {
        return res.status(403).json({
            message: "Invalid token"
        });
    }

    next();
}

app.get('/', (req, res) => {
    res.send("Public route - no authentication needed");
});

app.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).json({
        message: "Welcome to dashboard"
    });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
