var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		name: '',
		email: '',
		location: '',
		id: null
	}
});