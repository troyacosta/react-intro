var Backbone = require('backbone');
var JobModel = require('../models/jobModel.js');

module.exports = Backbone.Collection.extend({
	model: JobModel
});