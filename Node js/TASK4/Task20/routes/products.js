const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Products route");
    res.json({ message: "Products API working" });
});

module.exports = router;
