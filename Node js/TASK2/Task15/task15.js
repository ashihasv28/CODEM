const express = require('express');
const app = express();

app.use(express.json());

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function validateOrder(order) {
    await delay(200);
    if (!order.item || !order.qty || !order.userId) {
        throw { status: 400, message: "Invalid order data" };
    }
    return order;
}

async function checkInventory(order) {
    await delay(300);
    if (order.qty > 10) throw { status: 409, message: "Insufficient stock" };
    return true;
}

async function chargePayment(order) {
    await delay(400);
    if (order.userId === 'blocked') throw { status: 402, message: "Payment failed" };
    return true;
}

async function createShipment(order) {
    await delay(300);
    return { trackingId: `TRK-${Math.floor(Math.random() * 9000 + 1000)}` };
}

async function sendConfirmation(order) {
    await delay(200);
    return { emailSent: true };
}

app.get('/', (req, res) => res.send('Server running! Use POST /orders.'));

app.post('/orders', async (req, res) => {
    try {
        const order = await validateOrder(req.body); 

        await Promise.all([checkInventory(order), chargePayment(order)]);

        const [shipment, confirmation] = await Promise.all([
            createShipment(order),
            sendConfirmation(order)
        ]);

        res.status(201).json({
            orderId: `ORD-${Math.floor(Math.random() * 9000 + 1000)}`,
            status: "confirmed",
            ...shipment,
            ...confirmation
        });
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message || "Internal server error" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
