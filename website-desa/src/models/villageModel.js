const mongoose = require('mongoose');

const villageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    established: {
        type: Date,
        default: Date.now
    }
});

const Village = mongoose.model('Village', villageSchema);

module.exports = Village;