const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/users', verifyToken, userController.getAllUsers);
router.get('/user/:id', verifyToken, userController.getUserById);
router.post('/user', verifyToken, userController.createUser);
router.patch('/user/:id', verifyToken, userController.updateUser);
router.delete('/user/:id', verifyToken, userController.deleteUser);

module.exports = router;
