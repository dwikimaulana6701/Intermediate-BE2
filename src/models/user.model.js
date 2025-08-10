const db = require('../config/db');

async function getAllUsers() {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
}

async function getUserById(id) {
  const [rows] = await db.query('SELECT * FROM users WHERE id_user = ?', [id]);
  return rows[0];
}

async function createUser(data) {
  const { name, email, gender, phone, password } = data;
  const [result] = await db.query(
    `INSERT INTO users (name, email, gender, phone, password) VALUES (?, ?, ?, ?, ?)`,
    [name, email, gender, phone, password]
  );
  return result.insertId;
}

async function updateUser(id, data) {
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

  const sql = `UPDATE users SET ${fields.join(', ')} WHERE id_user = ?`;
  values.push(id);

  const [result] = await db.query(sql, values);
  return result.affectedRows > 0;
}

async function deleteUser(id) {
  const [result] = await db.query('DELETE FROM users WHERE id_user = ?', [id]);
  return result.affectedRows > 0;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
