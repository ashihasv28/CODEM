const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 }
];

app.get('/products', (req, res) => {
    console.log("GET products");
    res.status(200).json(products);
});

app.post('/products', (req, res) => {
    const { id, name, price } = req.body;

    if (!id || !name || !price) {
        console.log("POST failed");
        return res.status(400).json({
            error: "id, name and price are required"
        });
    }

    const exists = products.find(p => p.id === id);

    if (exists) {
        return res.status(400).json({
            error: "Product ID must be unique"
        });
    }

    products.push({ id, name, price });

    console.log("Product created");
    res.status(201).json({
        message: "Product created successfully"
    });
});

app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;

    const product = products.find(p => p.id === id);

    if (!product) {
        console.log("PUT failed");
        return res.status(404).json({
            error: "Product not found"
        });
    }

    if (!name || !price) {
        return res.status(400).json({
            error: "name and price required"
        });
    }

    product.name = name;
    product.price = price;

    console.log("Product updated");
    res.status(200).json({
        message: "Product updated successfully"
    });
});

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        console.log("DELETE failed");
        return res.status(404).json({
            error: "Product not found"
        });
    }

    products.splice(index, 1);

    console.log("Product deleted");
    res.status(200).json({
        message: "Product deleted successfully"
    });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
