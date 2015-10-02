var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		companyName: 'MaxPlay',
		location: 'Austin, TX.',
		logo: '../../images/featured-logo.jpg',
		bgImage: '../../images/featured.jpg',
		size: null,
		id: 1
	}
});