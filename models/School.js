const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: momgoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    email: {
        type: String,
        required: true
    },
    admin_id: {
        required: true,
        type: String
    },
    address: {
        type: String,
        required: false
    },
    cover_image: {
        type: String,
        required: false
    },
    phone_number: {
        required: false,
        type: Number
    },
    academic_calendar_id:{
        required: false
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});

module.exports = School = mongoose.model('school', SchoolSchema);