const express = require('express');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the server"
    });
});

app.get('/status', (req, res) => {
    res.json({
        message: "Server is running",
        status: "OK"
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
