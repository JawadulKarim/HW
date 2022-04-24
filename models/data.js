const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    Restaurent_Name: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('data', PostSchema);