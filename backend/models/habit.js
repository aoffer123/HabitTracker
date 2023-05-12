const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const habitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    importance: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }


}, {timestamps: true});

module.exports = mongoose.model('habit', habitSchema);