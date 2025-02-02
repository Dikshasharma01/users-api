const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    groups: [
        {
            type: String,
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
