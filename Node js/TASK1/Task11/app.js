const fs = require('fs');
const generateNumber = require('./randomNumber');

fs.writeFileSync('randomNumbers.txt', '');

for (let i = 0; i < 5; i++) {
  fs.appendFileSync('randomNumbers.txt', generateNumber() + '\n');
}
