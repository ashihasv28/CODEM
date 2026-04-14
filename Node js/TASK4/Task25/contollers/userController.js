let users = [
    { id: 1, name: "Ashiha" },
    { id: 2, name: "John" }
];

exports.getUsers = (req, res) => {
    res.status(200).json({ success: true, data: users });
};

exports.createUser = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, message: "Name required" });
    }

    const newUser = {
        id: users.length + 1,
        name
    };

    users.push(newUser);

    console.log("User created:", newUser);

    res.status(201).json({ success: true, data: newUser });
};
