const mongoose = require('mongoose');
const assert = require('assert');
const Author = require('../models/author');

//Describe our test
describe('Nesting records', function() {

beforeEach(function(done) {
	mongoose.connection.collections.author.drop(function(){
		done();
	})
})
	//Create tests
	it('Creates an author with sub-documents', function(done) {

		var pat = new Author({
			name: 'Patrick',
			books: [{title: 'Harry Pooter', pages: 560}]
		});

		pat.save().then(function(){
			Author.findOne({name: 'Patrick'}).then(function(record){
				assert(record.books.length === 1)
				done();
			})
		})
	})

	it('Adds a book to an Author', function(done) {

		var pat = new Author({
			name: 'Patrick',
			books: [{title: 'Harry Pooter', pages: 560}]
		});

		pat.save().then(function(){
			Author.findOne({name: 'Patrick'}).then(function(record){
				//add a book to the books array
				record.books.push({title: 'Wise Fear', pages: 700})
				record.save().then(function(){
					Author.findOne({name: 'Patrick'}).then(function(result) {
						assert(result.books.length === 2);
						done();
					})
				})
			})
		})
	})
})