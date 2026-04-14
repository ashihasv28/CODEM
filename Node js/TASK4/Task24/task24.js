const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Application running successfully" });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
