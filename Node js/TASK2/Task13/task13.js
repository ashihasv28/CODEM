const fs = require('fs').promises;

function fetchUserData(id) {
    console.log(`Fetching user ${id}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 10) return reject(new Error('User not found'));
            resolve({ id, name: id === 5 ? "Arun" : "Guest", email: id === 5 ? "arun@example.com" : "guest.example.com" });
        }, 400);
    });
}

function validateUser(user) {
    console.log('Validating email...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!user.email.includes('@')) reject(new Error('Invalid email'));
            else resolve(user);
        }, 200);
    });
}

function enrichUser(user) {
    console.log('Enriching user data...');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ ...user, role: 'admin' });
        }, 300);
    });
}

function saveUser(user, retry = true) {
    console.log('Saving to users.json...');
    return fs.writeFile('users.json', JSON.stringify(user, null, 2))
        .catch(err => {
            if (retry) {
                console.log('Save failed, retrying...');
                return saveUser(user, false);
            } else {
                throw err;
            }
        });
}

async function runPipeline(userId) {
    try {
        const userData = await fetchUserData(userId)
            .then(validateUser)
            .catch(err => {
                console.log(`${err.message}, using default user.`);
                return { id: userId, name: 'Default User', email: 'default@example.com' };
            });

        const enrichedUser = await enrichUser(userData);
        await saveUser(enrichedUser);

        console.log('Done:', enrichedUser);
    } catch (err) {
        console.error('Pipeline failed:', err.message);
    }
}

runPipeline(5);
