const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const habitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
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
    },
    completionDates: {
        type: Array,
        default: []
    },
    metrics: {
        type: Map,
        of: Number,
        default: new Map([
            ["Monday", 0],
            ["Tuesday", 0],
            ["Wednesday", 0],
            ["Thursday", 0],
            ["Friday", 0],
            ["Saturday", 0],
            ["Sunday", 0],
            ["Streak", 0],
            ["Consistency", 0]
        ])
    }



}, {timestamps: true});

module.exports = mongoose.model('habit', habitSchema);