const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create  Schema and Model 

const MarioCharSchema = new Schema({
	name: String,
	weight: Number
});

const marioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = marioChar;

