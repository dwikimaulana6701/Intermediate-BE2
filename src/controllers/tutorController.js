const tutorService = require('../services/tutorService');

async function getAllTutors(req, res) {
  try {
    const tutors = await tutorService.getAllTutors();
    res.status(200).json(tutors);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data tutor', error: error.message });
  }
}

async function getTutorById(req, res) {
  try {
    const tutor = await tutorService.getTutorById(req.params.id);
    if (!tutor) return res.status(404).json({ message: 'Tutor tidak ditemukan' });
    res.status(200).json(tutor);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data tutor', error: error.message });
  }
}

async function createTutor(req, res) {
  try {
    const newTutorId = await tutorService.createTutor(req.body);
    res.status(201).json({ message: 'Tutor berhasil dibuat', tutor_id: newTutorId });
  } catch (error) {
    res.status(500).json({ message: 'Gagal membuat tutor', error: error.message });
  }
}

async function updateTutor(req, res) {
  try {
    const updated = await tutorService.updateTutor(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Tutor tidak ditemukan' });
    res.status(200).json({ message: 'Tutor berhasil diperbarui' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal memperbarui tutor', error: error.message });
  }
}

async function deleteTutor(req, res) {
  try {
    const deleted = await tutorService.deleteTutor(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Tutor tidak ditemukan' });
    res.status(200).json({ message: 'Tutor berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus tutor', error: error.message });
  }
}

module.exports = {
  getAllTutors,
  getTutorById,
  createTutor,
  updateTutor,
  deleteTutor,
};
