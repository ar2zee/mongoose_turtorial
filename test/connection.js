const mongoose = require('mongoose');

//Connect to MongoDB

mongoose.connect('mongodb://test:test@ds135747.mlab.com:35747/mongoose-turtorial');


mongoose.connection.once('open', function() {
	console.log('Connected..')
}).on('error', function(err) {
	console.log('error: ' + err);
})