let products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" }
];

exports.getProducts = (req, res) => {
    res.status(200).json({ success: true, data: products });
};

exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: product });
};

exports.createProduct = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, message: "Name required" });
    }

    const newProduct = {
        id: products.length + 1,
        name
    };

    products.push(newProduct);

    console.log("Product created:", newProduct);

    res.status(201).json({ success: true, data: newProduct });
};
