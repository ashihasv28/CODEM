function auth(req, res, next) {
    const token = req.headers['authorization'];

    console.log("Admin access attempt:", token);

    if (!token) {
        return res.status(401).json({
            error: "Unauthorized access"
        });
    }

    if (token !== "admin123") {
        return res.status(403).json({
            error: "Invalid token"
        });
    }

    next();
}

module.exports = auth;
