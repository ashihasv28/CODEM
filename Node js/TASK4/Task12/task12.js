const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

function validateUser(req, res, next) {
    const { name, email } = req.body;

    if (!name || !email) {
        console.log("Validation Failed:", req.body);
        return res.status(400).json({
            error: "Name and email are required"
        });
    }

    next();
}

app.post('/register', validateUser, (req, res) => {
    res.status(201).json({
        message: "User registered successfully",
        data: req.body
    });
});

app.post('/create-user', validateUser, (req, res) => {
    res.status(201).json({
        message: "User created",
        data: req.body
    });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
