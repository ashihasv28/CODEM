const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Users route");
    res.json({ message: "Users API working" });
});

module.exports = router;
