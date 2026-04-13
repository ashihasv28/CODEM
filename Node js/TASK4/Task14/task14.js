const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "Ashiha", email: "ashiha@mail.com" },
    { id: 2, name: "Sai", email: "sai@mail.com" }
];

app.get('/users', (req, res) => {
    console.log("GET all users");
    res.status(200).json(users);
});

app.post('/users', (req, res) => {
    const { id, name, email } = req.body;

    if (!id || !name || !email) {
        console.log("POST failed");
        return res.status(400).json({
            error: "id, name and email are required"
        });
    }

    users.push({ id, name, email });

    console.log("User created");
    res.status(201).json({
        message: "User created successfully"
    });
});

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const user = users.find(u => u.id === id);

    if (!user) {
        console.log("PUT failed");
        return res.status(404).json({
            error: "User not found"
        });
    }

    if (!name || !email) {
        return res.status(400).json({
            error: "name and email required"
        });
    }

    user.name = name;
    user.email = email;

    console.log("User updated");
    res.status(200).json({
        message: "User updated successfully"
    });
});

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        console.log("DELETE failed");
        return res.status(404).json({
            error: "User not found"
        });
    }

    users.splice(index, 1);

    console.log("User deleted");
    res.status(200).json({
        message: "User deleted successfully"
    });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
