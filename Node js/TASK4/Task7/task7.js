const express = require('express');
const app = express();
const PORT = 3000;

const products = [
    { id: 101, name: "Laptop", price: 50000 },
    { id: 102, name: "Phone", price: 20000 },
    { id: 103, name: "Watch", price: 3000 }
];

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    console.log("Requested Product ID:", id);

    if (isNaN(id)) {
        return res.status(400).json({
            error: "Invalid ID format"
        });
    }

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            error: "Product not found"
        });
    }

    res.status(200).json({
        ...product,
        requestTime: new Date()
    });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
