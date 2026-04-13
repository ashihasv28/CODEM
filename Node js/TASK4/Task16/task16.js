const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let posts = [
    { id: 1, title: "First Post", content: "Hello World", author: "Ashiha" },
    { id: 2, title: "Second Post", content: "Express Basics", author: "Sai" }
];

app.get('/posts', (req, res) => {
    console.log("GET posts");
    res.status(200).json(posts);
});

app.post('/posts', (req, res) => {
    const { id, title, content, author } = req.body;

    if (!id || !title || !content || !author) {
        return res.status(400).json({
            error: "id, title, content and author are required"
        });
    }

    const exists = posts.find(p => p.id === id);

    if (exists) {
        return res.status(400).json({
            error: "Post ID must be unique"
        });
    }

    posts.push({ id, title, content, author });

    console.log("Post created");

    res.status(201).json({
        message: "Post created successfully"
    });
});

app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content, author } = req.body;

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            error: "Post not found"
        });
    }

    if (!title || !content || !author) {
        return res.status(400).json({
            error: "title, content and author are required"
        });
    }

    post.title = title;
    post.content = content;
    post.author = author;

    console.log("Post updated");

    res.status(200).json({
        message: "Post updated successfully"
    });
});

app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Post not found"
        });
    }

    posts.splice(index, 1);

    console.log("Post deleted");

    res.status(200).json({
        message: "Post deleted successfully"
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
