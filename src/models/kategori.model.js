const db = require('../config/db');

async function getAllKategori() {
  const [rows] = await db.query('SELECT * FROM kategori_kelas');
  return rows;
}

async function getKategoriById(id) {
  const [rows] = await db.query('SELECT * FROM kategori_kelas WHERE id_kategori = ?', [id]);
  return rows[0];
}

async function createKategori(data) {
  const { bidang_studi, durasi } = data;
  const [result] = await db.query(
    `INSERT INTO kategori_kelas (bidang_studi, durasi) VALUES (?, ?)`,
    [bidang_studi, durasi]
  );
  return result.insertId;
}

async function updateKategori(id, data) {
  const fields = [];
  const values = [];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      fields.push(`${key} = ?`);
      values.push(data[key]);
    }
  }

  if (fields.length === 0) {
    return false;
  }

  const sql = `UPDATE kategori_kelas SET ${fields.join(', ')} WHERE id_kategori = ?`;
  values.push(id);

  const [result] = await db.query(sql, values);
  return result.affectedRows > 0;
}

async function deleteKategori(id) {
  const [result] = await db.query('DELETE FROM kategori_kelas WHERE id_kategori = ?', [id]);
  return result.affectedRows > 0;
}

module.exports = {
  getAllKategori,
  getKategoriById,
  createKategori,
  updateKategori,
  deleteKategori,
};
