const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'signups'
});

module.exports = mongoose.model('SignUp', SignupSchema);