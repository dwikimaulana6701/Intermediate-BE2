const db = require('../config/db');

async function findUserByEmail(email) {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
}

async function createUser({ fullname, username, email, gender, phone, password, verificationToken }) {
  await db.query(
    'INSERT INTO users (fullname, username, email, gender, phone, password, verification_token) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [fullname, username, email, gender, phone, password, verificationToken]
  );
}

async function findUserByVerificationToken(token) {
  const [rows] = await db.query('SELECT * FROM users WHERE verification_token = ?', [token]);
  return rows[0];
}

async function updateUserVerificationStatus(userId) {
  await db.query('UPDATE users SET is_verified = 1, verification_token = NULL WHERE id_user = ?', [userId]);
}

module.exports = { findUserByEmail, createUser, findUserByVerificationToken, updateUserVerificationStatus };
