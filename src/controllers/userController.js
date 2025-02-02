const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, groups } = req.body;
        const newUser = new User({ name, email, groups });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all users with optional filtering
exports.getUsers = async (req, res) => {
    try {
        const { group, name, email } = req.query;
        // Build the query object dynamically
        let query = {};

        // Filter for groups: check if provided group(s) exist in the user's groups array
        if (group) {
            // Allow comma-separated group values e.g., ?group=admin,user
            const groupsArray = group.split(',').map(item => item.trim());
            query.groups = { $in: groupsArray };
        }

        if (name) {
            // Using regex for partial and case-insensitive matching
            query.name = { $regex: name, $options: 'i' };
        }

        if (email) {
            query.email = { $regex: email, $options: 'i' };
        }

        const users = await User.find(query);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
    try {
        const { name, email, groups } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, groups },
            { new: true, runValidators: true }
        );
        if (!updatedUser) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};