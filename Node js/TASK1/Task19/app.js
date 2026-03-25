const fs = require('fs');

fs.readdir('assets', (err, files) => {
  if (err) throw err;

  fs.writeFileSync('fileList.txt', files.join('\n'));
});
