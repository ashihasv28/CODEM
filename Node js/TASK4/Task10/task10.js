const express = require('express');
const app = express();
const PORT = 3000;

const items = [];
for (let i = 1; i <= 20; i++) {
    items.push({ id: i, name: `Item ${i}` });
}

app.get('/items', (req, res) => {
    let { page, limit } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    if (!page) page = 1;
    if (!limit) limit = 5;

    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
        return res.status(400).json({
            error: "Invalid page or limit"
        });
    }

    console.log(`Pagination: page=${page}, limit=${limit}`);

    const start = (page - 1) * limit;
    const end = start + limit;

    const paginatedItems = items.slice(start, end);

    res.status(200).json({
        page,
        limit,
        totalItems: items.length,
        data: paginatedItems
    });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
