const express = require('express');
const router = express.Router();
const logger = require('../middleware/logger');

router.use(logger);

let products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" }
];

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
});

module.exports = router;
