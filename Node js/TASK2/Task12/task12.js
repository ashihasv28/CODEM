const express = require('express');
const app = express();
const PORT = 3000;

function authService(token) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token === 'valid-token') resolve({ userId: 1 });
            else reject({ status: 401, message: 'Unauthorized' });
        }, 300);
    });
}

function userService(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'Ashiha', email: 'ashi@mail.com', plan: 'pro' });
        }, 500);
    });
}

function billingService(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ due: 1200, nextDate: '2024-02-01' });
        }, 400);
    });
}

app.get('/', (req, res) => {
    res.send('Task 12 Microservice Simulator is running. Use /profile with x-auth header.');
});

app.get('/profile', async (req, res) => {
    const token = req.headers['x-auth'];

    try {
        
        const authData = await authService(token);

        const [user, billing] = await Promise.all([
            userService(authData.userId),
            billingService(authData.userId)
        ]);

        res.json({ user, billing });
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
