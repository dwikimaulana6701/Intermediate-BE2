const kategoriModel = require('../models/kategori.model');

async function getAllKategori() {
  return await kategoriModel.getAllKategori();
}

async function getKategoriById(id) {
  return await kategoriModel.getKategoriById(id);
}

async function createKategori(data) {
  return await kategoriModel.createKategori(data);
}

async function updateKategori(id, data) {
  return await kategoriModel.updateKategori(id, data);
}

async function deleteKategori(id) {
  return await kategoriModel.deleteKategori(id);
}

module.exports = {
  getAllKategori,
  getKategoriById,
  createKategori,
  updateKategori,
  deleteKategori,
};
