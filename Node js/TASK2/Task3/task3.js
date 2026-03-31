const fs = require('fs');

let isProcessing = false;

function readFile(filename) {
    console.log("Reading file...");
    return fs.promises.readFile(filename, 'utf-8');
}

function parseContent(data) {
    const lines = data.split('\n');
    const filtered = lines.filter(line => line.trim() !== '');

    const removed = lines.length - filtered.length;
    console.log(`Parsing ${lines.length} lines, ${removed} empty removed`);

    return filtered;
}

function saveProcessed(lines) {
    return fs.promises.writeFile('output.txt', lines.join('\n'))
        .then(() => {
            console.log("Saved to output.txt");
        });
}

// Step 4: Watch File and Process
function watchAndProcess(filename) {
    fs.watch(filename, async (eventType) => {
        if (eventType === 'change' && !isProcessing) {
            isProcessing = true;

            console.log(`File changed: ${filename}`);

            try {
                const data = await readFile(filename);
                const parsed = parseContent(data);
                await saveProcessed(parsed);
            } catch (err) {
                console.error(err);
            }

            // Prevent multiple triggers
            setTimeout(() => {
                isProcessing = false;
            }, 500);
        }
    });
}

// calling the function
watchAndProcess('data.txt');
