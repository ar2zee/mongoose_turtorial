const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Saving Records', function () {

	it('Saves a record to DB', function(done){	
		
		let char = new MarioChar({
			name: 'Mario'
		})

		char.save().then(function(){
			assert(char.isNew === false); // return false if it's not longer new and it's already saved in DB
			done();
		})

	})
	
});