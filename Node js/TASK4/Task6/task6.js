const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    const startTime = new Date();

    res.on('finish', () => {
        console.log(
            `${req.method} ${req.url} - ${res.statusCode} - ${startTime}`
        );
    });

    next();
});

app.get('/test', (req, res) => {
    res.status(200).json({
        message: "Test API working"
    });
});

app.get('/api/products', (req, res) => {
    res.status(200).json({
        message: "Products API working",
        status: 200
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
