const db = require('../config/db');

async function getAllTutors() {
  const [rows] = await db.query('SELECT * FROM tutor');
  return rows;
}

async function getTutorById(id) {
  const [rows] = await db.query('SELECT * FROM tutor WHERE id_tutor = ?', [id]);
  return rows[0];
}

async function createTutor(data) {
  const { avatar, name_tutor, role_tutor } = data;
  const [result] = await db.query(
    `INSERT INTO tutor (avatar, name_tutor, role_tutor) VALUES (?, ?, ?)`,
    [avatar, name_tutor, role_tutor]
  );
  return result.insertId;
}

async function updateTutor(id, data) {
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

  const sql = `UPDATE tutor SET ${fields.join(', ')} WHERE id_tutor = ?`;
  values.push(id);

  const [result] = await db.query(sql, values);
  return result.affectedRows > 0;
}

async function deleteTutor(id) {
  const [result] = await db.query('DELETE FROM tutor WHERE id_tutor = ?', [id]);
  return result.affectedRows > 0;
}

module.exports = {
  getAllTutors,
  getTutorById,
  createTutor,
  updateTutor,
  deleteTutor,
};
