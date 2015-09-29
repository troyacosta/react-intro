var Backbone = require('backbone');
var CompanyModel = require('../models/companyModel.js');

module.exports = Backbone.Collection.extend({
	model: CompanyModel
});