const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Orders route");
    res.json({ message: "Orders API working" });
});

module.exports = router;
