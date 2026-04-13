const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`Static file requested: ${req.url}`);
    next();
});

app.listen(PORT, () => console.log("Server running"));
