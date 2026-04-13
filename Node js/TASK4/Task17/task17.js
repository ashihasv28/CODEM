const express = require('express');
const app = express();
const PORT = 3000;

const userRoutes = require('./routes/users');

app.use(express.json());

app.use('/api/users', userRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
