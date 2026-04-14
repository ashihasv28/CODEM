const express = require('express');
const app = express();

const adminRouter = require('./routes/admin');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Public API working" });
});

app.use('/admin', adminRouter);

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
