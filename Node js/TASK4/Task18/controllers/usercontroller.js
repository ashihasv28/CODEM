let users = [
    { id: 1, name: "Ashiha" },
    { id: 2, name: "Sai" }
];

exports.getUsers = (req, res) => {
    console.log("Controller: getUsers");
    res.status(200).json({
        message: "Controller executed successfully",
        data: users
    });
};

exports.createUser = (req, res) => {
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).json({
            error: "id and name required"
        });
    }

    users.push({ id, name });

    console.log("Controller: createUser");

    res.status(201).json({
        message: "User created successfully"
    });
};
