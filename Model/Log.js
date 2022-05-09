const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
    username: { type: String, required: true},
    count: { type: Number},
    log: [Object]
})
const Person = mongoose.model('Person',personSchema,'people')
module.exports = Person;