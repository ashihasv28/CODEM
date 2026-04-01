  const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 } 
});

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const scanFile = (buffer) => delay(500).then(() => buffer);

const saveFile = (buffer, originalName) => delay(200).then(() => originalName);

const generateThumbnail = (filename) => delay(300).then(() => 'thumb_' + filename);

app.get('/upload', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Upload File</title>
      </head>
      <body>
        <h2>Upload File to Server</h2>
        <form action="/upload" method="post" enctype="multipart/form-data">
          <input type="file" name="file" required />
          <button type="submit">Upload</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) throw 'No file uploaded';

    const buffer = req.file.buffer;
    const originalName = req.file.originalname;

    await scanFile(buffer);

    const [filename, thumbnail] = await Promise.all([
      saveFile(buffer, originalName),
      generateThumbnail(originalName)
    ]);

    const sizeKB = Math.round(buffer.length / 1024);

    res.json({
      success: true,
      filename,
      size: `${sizeKB}KB`,
      thumbnail
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.toString() });
  }
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
