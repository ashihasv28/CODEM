const express = require('express');
const app = express();
const PORT = 3000;

const adminRoutes = require('./routes/admin');

app.use(express.json());

app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send("Public route");
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
