const mongoose = require('mongoose');
const Schema = mongoose.Schema

const personSchema = new Schema({
    name: { type: String, required: true},
    age: { type: Number},
    favoriteFoods: [String]
})
const Person = mongoose.model('Person',personSchema,'people')
console.log("qwerty",personSchema.path('name').index({ unique: true }));
module.exports = Person