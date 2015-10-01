var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		companyName: '',
		location: '',
		logo: '',
		bgImage: '',
		size: null,
		id: 1
	}
});