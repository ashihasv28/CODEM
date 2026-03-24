const fs = require('fs');
const createGreeting = require('./greeting');

const names = fs.readFileSync('names.txt', 'utf8')
  .split('\n')
  .map(name => name.trim())
  .filter(name => name.length > 0);

const greetings = names.map(name => createGreeting(name));

fs.writeFileSync('greetings.txt', greetings.join('\n'));
