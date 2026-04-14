let products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" }
];

exports.getProducts = (req, res) => {
    res.status(200).json(products);
};

exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
};

exports.createProduct = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Product name required" });
    }

    const newProduct = {
        id: products.length + 1,
        name
    };

    products.push(newProduct);

    console.log("Product added:", newProduct);

    res.status(201).json(newProduct);
};
