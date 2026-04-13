const express = require('express');
const app = express();
const PORT = 3000;

const products = [
    { id: 101, name: "Laptop", category: "electronics" },
    { id: 102, name: "Phone", category: "electronics" },
    { id: 103, name: "Shirt", category: "clothing" },
    { id: 104, name: "Book", category: "education" },
    { id: 105, name: "Watch", category: "accessories" }
];

app.get('/search', (req, res) => {
    const { name, category } = req.query;

    console.log("Search Query:", req.query);

    let result = products;

    if (name) {
        result = result.filter(p =>
            p.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (category) {
        result = result.filter(p =>
            p.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (!name && !category) {
        return res.status(400).json({
            error: "Please provide search query"
        });
    }

    res.status(200).json({
        resultCount: result.length,
        data: result
    });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
