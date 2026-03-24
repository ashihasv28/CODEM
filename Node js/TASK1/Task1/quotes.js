//quotes.js

const quotes = [
  "Success is not final, failure is not fatal.",
  "Believe in yourself.",
  "Stay positive, work hard, make it happen.",
  "Dream big and dare to fail.",
  "Push yourself, because no one else will."
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

module.exports = { getRandomQuote };
