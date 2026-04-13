const express = require('express');
const app = express();
const PORT = 3000;

const users = [
    { username: "sai", email: "sai@mail.com", role: "student" },
    { username: "anshu", email: "anshu@mail.com", role: "developer" },
    { username: "ahi", email: "ahi@mail.com", role: "admin" }
];

app.get('/users/:username', (req, res) => {
    const username = req.params.username;

    console.log("Requested Username:", username);

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    res.status(200).json({
        ...user,
        requestTime: new Date()
    });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
