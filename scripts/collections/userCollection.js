var Backbone = require('backbone');
var UserModel = require('../models/userModel.js');

module.exports = Backbone.Collection.extend({
	model: UserModel
});