const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// bug in mongoose that will give false positives if this is not included
mongoose.Promise = global.Promise;
const slug = require('slugs');
const timestamps = require('mongoose-timestamp');

const personSchema = new Schema({
	name: String,
	gender: String,
	age: Number,
});

module.exports = mongoose.model('Person', personSchema);
