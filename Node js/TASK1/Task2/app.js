// app.js

const fs = require('fs');

fs.readFile('users.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const users = data.split('\n');

  console.log("User List:");
  users.forEach((user, index) => {
    console.log(`${index + 1}. ${user}`);
  });
});
