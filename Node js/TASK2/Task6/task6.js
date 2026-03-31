const fs = require('fs').promises;
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('dataReceived', async (data) => {
    console.log('dataReceived →', data);

    if (data && typeof data.value === 'number') {
        emitter.emit('dataValid', data);
    } else {
        emitter.emit('dataInvalid', 'Invalid data');
    }
});

emitter.on('dataValid', async (data) => {
    console.log('dataValid → validation passed');

    const processed = {
        id: data.id,
        value: data.value * 2
    };

    emitter.emit('dataProcessed', processed);
});

emitter.on('dataProcessed', async (data) => {
    console.log('dataProcessed →', data);

    try {
        await fs.writeFile('result.txt', JSON.stringify(data, null, 2));
        console.log('dataSaved → written to result.txt');
        emitter.emit('dataSaved');
    } catch (err) {
        console.error('Error saving file:', err);
    }
});

emitter.on('dataInvalid', (msg) => {
    console.log('dataInvalid →', msg);
});

emitter.emit('dataReceived', { id: 1, value: 42 });
