const express = require('express');
const app = express();
const PORT = 3000;

const products = [
    { id: 101, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 102, name: "Phone", price: 20000, category: "Electronics" },
    { id: 103, name: "Shirt", price: 1000, category: "Clothing" },
    { id: 104, name: "Book", price: 500, category: "Education" },
    { id: 105, name: "Watch", price: 3000, category: "Accessories" }
];

app.use((req, res, next) => {
    console.log(`API called: ${req.url}`);
    next();
});

app.get('/api/products', (req, res) => {
    const sorted = products.sort((a, b) => a.name.localeCompare(b.name));

    res.status(200).json({
        totalProducts: sorted.length,
        data: sorted
    });
});

app.listen(PORT, () => console.log("Server running"));
