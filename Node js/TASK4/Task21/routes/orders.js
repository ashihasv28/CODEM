const express = require('express');
const router = express.Router();
let orders = require('../data/orders');

router.get('/', (req, res) => {
    console.log("Fetching all orders");
    res.status(200).json(orders);
});

router.post('/', (req, res) => {
    const { product, quantity } = req.body;

    if (!product || !quantity) {
        console.log("Invalid order request");
        return res.status(400).json({ error: "Product and quantity are required" });
    }

    const newOrder = {
        id: orders.length + 5001,
        product,
        quantity
    };

    orders.push(newOrder);
    console.log("Order created:", newOrder);

    res.status(201).json(newOrder);
});

module.exports = router;
