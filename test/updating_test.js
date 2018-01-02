const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Updating Records', function () {

	let cahr;

	beforeEach(function(done) {
		char = new MarioChar({
			name: 'Mario',
			weight: 50
		})

		char.save().then(function(){
			done();
		})
	})

	

	it('Increment the weight by 1', function(done){	
		
		MarioChar.update({}, {$mul: {weight: 2 } }).then(function(){
			MarioChar.findOne({name: 'Mario'}).then(function(result) {
				assert(result.weight === 100);
				done();
			})
		})
	});

	it('Update one record from the database', function(done){	
			
			MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Sergio'}).then(function(result) {
				MarioChar.findOne({_id: char._id}).then(function(result) {
					assert(result.name === 'Sergio')
					done();
					
				})
			})	
		});

});
