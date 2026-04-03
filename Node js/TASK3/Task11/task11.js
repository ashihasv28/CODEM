const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('productAdded', (product) => {
    console.log("Product saved to database");
});

eventEmitter.on('productAdded', (product) => {
    console.log("Email notification sent");
});

eventEmitter.on('productAdded', (product) => {
    console.log("Inventory updated");
});

eventEmitter.emit('productAdded', 'Laptop');

console.log("Product Name: Laptop");
