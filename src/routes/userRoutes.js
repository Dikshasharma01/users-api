const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/', userController.createUser);

// Get all users (with optional filters)
router.get('/', userController.getUsers);

// Get a single user by id
router.get('/:id', userController.getUserById);

// Update a user
router.put('/:id', userController.updateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;