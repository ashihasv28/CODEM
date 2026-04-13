const express = require('express');
const app = express();
const PORT = 3000;

const students = [
    { id: 1, name: "Sai", course: "CSE", age: 21 },
    { id: 2, name: "Anu", course: "ECE", age: 20 },
    { id: 3, name: "Rahul", course: "IT", age: 22 },
    { id: 4, name: "Meena", course: "EEE", age: 21 },
    { id: 5, name: "Arjun", course: "CSE", age: 23 }
];

app.use((req, res, next) => {
    console.log(`Student API hit: ${req.url}`);
    next();
});

app.get('/students', (req, res) => {
    res.status(200).json(students);
});

app.get('/students/count', (req, res) => {
    res.json({ totalStudents: students.length });
});

app.get('/students/names', (req, res) => {
    const names = students.map(s => s.name);
    res.json(names);
});

app.listen(PORT, () => console.log("Server running"));
