const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: "Ashiha" },
    { id: 2, name: "Sai" }
];

router.get('/', (req, res) => {
    console.log("Users route accessed");
    res.status(200).json({
        message: "User routes working",
        data: users
    });
});

router.post('/', (req, res) => {
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).json({
            error: "id and name required"
        });
    }

    users.push({ id, name });

    res.status(201).json({
        message: "User added"
    });
});

module.exports = router;
