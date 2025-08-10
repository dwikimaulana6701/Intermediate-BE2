const userService = require('../services/userService');

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data user', error: error.message });
  }
}

async function getUserById(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data user', error: error.message });
  }
}

async function createUser(req, res) {
  try {
    const newUserId = await userService.createUser(req.body);
    res.status(201).json({ message: 'User berhasil dibuat', user_id: newUserId });
  } catch (error) {
    res.status(500).json({ message: 'Gagal membuat user', error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const updated = await userService.updateUser(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'User tidak ditemukan' });
    res.status(200).json({ message: 'User berhasil diperbarui' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal memperbarui user', error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const deleted = await userService.deleteUser(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'User tidak ditemukan' });
    res.status(200).json({ message: 'User berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus user', error: error.message });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
