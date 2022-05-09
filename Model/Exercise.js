const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    username: {type: String, required: true},
    description: String,
    duration: Number,
    date: Date,
})

const Exercise = mongoose.model('Exercise',exerciseSchema,'people');
module.exports = Exercise;