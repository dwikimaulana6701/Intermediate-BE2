const express = require('express');
const router = express.Router();
const kategoriController = require('../controllers/kategoriController');

router.get('/kategori', kategoriController.getAllKategori);
router.get('/kategori/:id', kategoriController.getKategoriById);
router.post('/kategori', kategoriController.createKategori);
router.patch('/kategori/:id', kategoriController.updateKategori);
router.delete('/kategori/:id', kategoriController.deleteKategori);

module.exports = router;
