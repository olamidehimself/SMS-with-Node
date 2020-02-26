const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    trial_until:{
        type: Date,
        required: true
    },
    role:{
        type:String
    },
    approved_at:{
        required:false,
    },
    approved_by:{
        required:false,
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);