var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		name: '',
		location: '',
		logo: '',
		bgImage: '',
		size: null,
		id: null
	}
});