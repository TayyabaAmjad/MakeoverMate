const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const cors = require('cors');
app.use(cors());

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// Set storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename the file to avoid conflicts
  }
});

const upload = multer({ storage: storage });

// Create an uploads directory
const fs = require('fs');
const dir = './uploads';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// File upload route
app.post('/upload', upload.single('image'), (req, res) => {
  try {
    // Send the uploaded file information as a response
    res.status(200).json({
      message: 'File uploaded successfully',
      file: req.file.filename
    });
  } catch (error) {
    res.status(500).json({ message: 'File upload failed', error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
