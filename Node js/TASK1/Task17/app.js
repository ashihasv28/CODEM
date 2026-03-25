const fs = require('fs');

fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const words = data.toLowerCase().split(/\s+/);
  const unique = [...new Set(words)];

  fs.writeFileSync('uniqueWords.txt', unique.join('\n'));
});
