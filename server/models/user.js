const mongoose = require('mongoose');

let User = mongoose.model('User', {
    userName: String,
    chipCount: Number,
    wonHands: Number,
    level: Number,
})

module.exports = {
    User
}