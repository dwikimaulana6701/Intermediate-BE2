const kategoriService = require('../services/kategoriService');

async function getAllKategori(req, res) {
  try {
    const kategori = await kategoriService.getAllKategori();
    res.status(200).json(kategori);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data kategori', error: error.message });
  }
}

async function getKategoriById(req, res) {
  try {
    const kategori = await kategoriService.getKategoriById(req.params.id);
    if (!kategori) return res.status(404).json({ message: 'Kategori tidak ditemukan' });
    res.status(200).json(kategori);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data kategori', error: error.message });
  }
}

async function createKategori(req, res) {
  try {
    const newKategoriId = await kategoriService.createKategori(req.body);
    res.status(201).json({ message: 'Kategori berhasil dibuat', kategori_id: newKategoriId });
  } catch (error) {
    res.status(500).json({ message: 'Gagal membuat kategori', error: error.message });
  }
}

async function updateKategori(req, res) {
  try {
    const updated = await kategoriService.updateKategori(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Kategori tidak ditemukan' });
    res.status(200).json({ message: 'Kategori berhasil diperbarui' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal memperbarui kategori', error: error.message });
  }
}

async function deleteKategori(req, res) {
  try {
    const deleted = await kategoriService.deleteKategori(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Kategori tidak ditemukan' });
    res.status(200).json({ message: 'Kategori berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus kategori', error: error.message });
  }
}

module.exports = {
  getAllKategori,
  getKategoriById,
  createKategori,
  updateKategori,
  deleteKategori,
};
