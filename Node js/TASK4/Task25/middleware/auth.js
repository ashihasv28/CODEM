function auth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ success: false, message: "Token missing" });
    }

    if (token !== "admin123") {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }

    next();
}

module.exports = auth;
