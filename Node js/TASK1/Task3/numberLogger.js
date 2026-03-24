// numberLogger.js

const fs = require('fs');

function logNumber(number) {
  fs.appendFile('numbers.txt', number + '\n', (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    }
  });
}

module.exports = { logNumber };
