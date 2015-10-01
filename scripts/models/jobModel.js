var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		title: '',
		description: '',
		location: '',
		companyName: '',
		tags: [''],
		date: new Date,
		id: 1,
		companyId: 1
	},

	idAttribute: '_id',
	// urlRoot: 'http://tiyfe.herokuapp.com/collections/troy-job-collection'
});