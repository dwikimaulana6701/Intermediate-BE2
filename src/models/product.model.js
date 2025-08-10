const db = require('../config/db');

async function getAllProduct() {
  const [rows] = await db.query(`
    SELECT 
      p.id_produk,
      p.image_course,
      p.title,
      p.description,
      p.price,
      t.name_tutor,
      t.avatar,
      t.role_tutor,
      k.bidang_studi
    FROM produk p
    INNER JOIN tutor t ON p.id_tutor = t.id_tutor
    INNER JOIN kategori_kelas k ON p.id_kategori = k.id_kategori
  `);
  return rows;
}

async function getProductById(id) {
  const [rows] = await db.query(`
    SELECT 
      p.id_produk,
      p.image_course,
      p.title,
      p.description,
      p.price,
      t.name_tutor,
      t.avatar,
      t.role_tutor,
      k.bidang_studi
    FROM produk p
    INNER JOIN tutor t ON p.id_tutor = t.id_tutor
    INNER JOIN kategori_kelas k ON p.id_kategori = k.id_kategori
    WHERE p.id_produk = ?
  `, [id]);
  return rows[0];
}

async function createProduct(data) {
  const { id_user, id_tutor, id_kategori, image_course, title, description, price } = data;
  const [result] = await db.query(`
    INSERT INTO produk (id_user, id_tutor, id_kategori, image_course, title, description, price)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [id_user, id_tutor, id_kategori, image_course, title, description, price]);
  return result.insertId;
}

async function updateProduct(id, data) {
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

  const sql = `UPDATE produk SET ${fields.join(', ')} WHERE id_produk = ?`;
  values.push(id);

  const [result] = await db.query(sql, values);
  return result.affectedRows > 0;
}

async function deleteProduct(id) {
  const [result] = await db.query(`
    DELETE FROM produk WHERE id_produk = ?
  `, [id]);
  return result.affectedRows > 0;
}

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};