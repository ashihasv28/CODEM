const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, (req, res) => {
    console.log("Admin route accessed");
    
    res.status(200).json({
        message: "Welcome Admin"
    });
});

module.exports = router;
