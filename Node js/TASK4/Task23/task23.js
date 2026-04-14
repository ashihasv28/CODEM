const express = require('express');
const app = express();

const productRouter = require('./routes/products');

app.use(express.json());

app.use('/products', productRouter);

app.get('/', (req, res) => {
    res.json({ message: "Home route (no logging here)" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
