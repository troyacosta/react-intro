var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		title: '',
		description: '',
		date: new Date,
		tags: [''],
		id: null
	}
});