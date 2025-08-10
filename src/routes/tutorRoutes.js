const express = require('express');
const router = express.Router();
const tutorController = require('../controllers/tutorController');

router.get('/tutor', tutorController.getAllTutors);
router.get('/tutor/:id', tutorController.getTutorById);
router.post('/tutor', tutorController.createTutor);
router.patch('/tutor/:id', tutorController.updateTutor);
router.delete('/tutor/:id', tutorController.deleteTutor);

module.exports = router;