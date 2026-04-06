const fs = require("fs");

const readableStream = fs.createReadStream("source.txt");

const writableStream = fs.createWriteStream("destination.txt");

console.log("Piping started...");
console.log("Data flowing from source.txt to destination.txt");

readableStream.pipe(writableStream);

writableStream.on("finish", () => {
    console.log("Pipe complete — destination.txt written successfully");
});

readableStream.on("error", (err) => {
    console.log("Error reading file:", err);
});

writableStream.on("error", (err) => {
    console.log("Error writing file:", err);
});
