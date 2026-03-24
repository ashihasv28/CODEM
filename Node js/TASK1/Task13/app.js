const fs = require('fs');

fs.readFile('numbers.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const nums = data.split('\n').map(Number).filter(n => !isNaN(n));
  const even = nums.filter(n => n % 2 === 0);

  fs.writeFileSync('evenNumbers.txt', even.join('\n'));
});
