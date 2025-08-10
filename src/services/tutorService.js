const tutorModel = require('../models/tutor.model');

async function getAllTutors() {
  return await tutorModel.getAllTutors();
}

async function getTutorById(id) {
  return await tutorModel.getTutorById(id);
}

async function createTutor(data) {
  return await tutorModel.createTutor(data);
}

async function updateTutor(id, data) {
  return await tutorModel.updateTutor(id, data);
}

async function deleteTutor(id) {
  return await tutorModel.deleteTutor(id);
}

module.exports = {
  getAllTutors,
  getTutorById,
  createTutor,
  updateTutor,
  deleteTutor,
};
