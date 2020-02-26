const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    user_id: {
        required: true,
        type: String
    },
    phone_number: {
        type: String,
        required: false
    },
    profile_picture: {
        type: String,
        required: false
    },
    dob: {
        required: false,
        type: Number
    },
    school_id: {
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = Teacher = mongoose.model('teacher', TeacherSchema);