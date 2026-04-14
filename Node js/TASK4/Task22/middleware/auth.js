function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        console.log("Unauthorized access attempt - No token");
        return res.status(401).json({ error: "Unauthorized: Token missing" });
    }

    if (token !== "admin123") {
        console.log("Unauthorized access attempt - Invalid token");
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

    console.log("Authorized access granted");
    next();
}

module.exports = authMiddleware;
