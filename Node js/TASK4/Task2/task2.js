const express = require('express');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`Route accessed: ${req.url}`);
    next();
});

app.get('/home', (req, res) => {
    res.status(200).json({
        route: "home",
        message: "Welcome to Home Page",
        time: new Date()
    });
});

app.get('/about', (req, res) => {
    res.status(200).json({
        route: "about",
        message: "Welcome to About Page",
        time: new Date()
    });
});

app.get('/contact', (req, res) => {
    res.status(200).json({
        route: "contact",
        message: "Welcome to Contact Page",
        time: new Date()
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
