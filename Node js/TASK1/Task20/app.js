const fs = require('fs');

// Read JSON file
fs.readFile('products.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const products = JSON.parse(data);

  // Print output
  console.log("Product List");
  products.forEach(product => {
    console.log(`${product.name} - $${product.price}`);
  });
});
