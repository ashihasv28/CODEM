const fs = require('fs');

fs.readFile('story.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const lines = data.trim().split('\n');
  console.log("Total Lines:", lines.length);
});
