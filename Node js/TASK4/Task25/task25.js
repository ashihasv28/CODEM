const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "API running successfully"
    });
});

app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
