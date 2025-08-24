const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');

router.post('/upload', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }
        
        res.status(201).json({
            message: 'File uploaded successfully!',
            filename: req.file.filename,
            path: req.file.path
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error during file upload.', error: error.message });
    }
});

module.exports = router;