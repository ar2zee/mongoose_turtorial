const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise;

//Connect to DB before tests run
before(function(done) {

	//Connect to MongoDB
	mongoose.connect('mongodb://test:test@ds135747.mlab.com:35747/mongoose-turtorial');

	mongoose.connection.once('open', function() {
		console.log('Connected..')
		done();
	}).on('error', function(err) {
		console.log('error: ' + err);
	});
});

// Drop the Characters collection before each tests
beforeEach(function(done) {
	//Drop the collection
	mongoose.connection.collections.mariochar.drop(function() {
		done();
	})
})