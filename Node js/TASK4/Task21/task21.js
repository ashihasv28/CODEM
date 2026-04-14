const express = require('express');
const app = express();

const ordersRouter = require('./routes/orders');

app.use(express.json());

app.use('/orders', ordersRouter);

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
