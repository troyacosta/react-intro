var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		title: 'Senior Frontend Engineer',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		// details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla metus sed vulputate bibendum. Praesent ligula enim, fringilla eget sollicitudin sed, tincidunt ac risus. Morbi nec lacinia turpis, in gravida lacus. Pellentesque fermentum nulla et arcu imperdiet volutpat. Sed porta pretium dolor, fringilla efficitur lectus suscipit rutrum. Nulla facilisi. Nulla mollis neque vitae mauris hendrerit, eget pellentesque ex sodales. Ut eros quam, facilisis id blandit quis, dapibus eu lorem. Sed ligula enim, aliquam sed erat nec, rutrum malesuada magna. Morbi vitae bibendum diam. Morbi sagittis elementum ullamcorper. In vitae hendrerit arcu. Nulla id odio eget nulla facilisis vehicula a et dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec scelerisque scelerisque gravida. Sed consectetur, turpis eget eleifend auctor, nulla mauris ultrices nisl, vitae ultricies nisi metus eget ante.
				  // Cras venenatis finibus odio eget viverra. Phasellus molestie neque ac lacus pharetra placerat ut eget turpis. Nulla velit turpis, consectetur ac est eu, placerat accumsan libero. Etiam vestibulum purus tellus, eget finibus tortor interdum sed. Phasellus pharetra, odio in tristique tempus, lacus tortor pretium quam, a ullamcorper tellus nulla et ipsum. Aliquam erat volutpat. Nam suscipit enim a ante aliquam, nec vestibulum magna tincidunt. Ut condimentum quis nisl sit amet consectetur. Aliquam nec sem massa. Ut gravida viverra purus eu posuere. Phasellus bibendum bibendum erat, ut viverra quam congue vitae. Maecenas varius magna ligula. Praesent gravida dui id felis rutrum aliquam.
				  // Cras eros risus, semper at eros sed, semper mollis risus. Maecenas luctus ligula vehicula diam condimentum fermentum. Fusce ut efficitur leo. Etiam vitae ullamcorper nunc, et commodo neque. Aenean ultricies sollicitudin nisl, sed facilisis ligula. Aenean odio quam, rutrum id ultrices ut, lobortis eget ante. Integer dapibus, quam quis consequat feugiat, libero erat lacinia sapien, sit amet faucibus sem nulla et orci. Nulla sapien diam, condimentum id finibus nec, interdum non est.
				  // Vivamus sit amet ipsum volutpat, eleifend ligula dictum, feugiat nunc. Pellentesque id nunc velit. Sed vehicula dui enim, et accumsan risus sodales quis. Mauris vel turpis eget velit hendrerit luctus vitae sit amet ex. Aliquam non justo a arcu vehicula finibus et ac purus. Curabitur ullamcorper elit sit amet nulla sollicitudin, id porta lectus scelerisque. Ut fringilla metus nec pellentesque ultrices. Pellentesque scelerisque urna sed ex faucibus, ac interdum orci sagittis. Aliquam erat volutpat. Sed fermentum erat non lacinia pharetra. Praesent efficitur dui sed libero posuere, nec ultrices nulla lobortis. Pellentesque nec mattis lectus. Fusce accumsan molestie leo quis venenatis. Maecenas gravida odio quis lorem vehicula, at porta purus ultricies.',
		location: 'New York, NY',
		companyName: 'NSONE',
		tags: ['javascript', 'angular', 'css', 'html'],
		date: new Date,
		id: 1,
		companyId: 1
	},

	idAttribute: '_id',
	// urlRoot: 'http://tiyfe.herokuapp.com/collections/troy-job-collection'
});