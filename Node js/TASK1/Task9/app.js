const fs = require('fs');

fs.readFile('article.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const matches = data.match(/node\.js/gi);
  const count = matches ? matches.length : 0;

  console.log(`Word "Node.js" found ${count} times`);
});
