'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section className="jobForm">
				<form>
					<h2>Post your job</h2>
					<p>Title</p>
					<input type="text" />
					<p>Company Name</p>
					<input type="text" />
					<p>Location</p>
					<input type="text" />
					<p>Description</p>
					<textarea></textarea>
					<p>Tags</p>
					<input type="text" />
					<button>Submit Job</button>
				</form>
			</section>
			);
	}
});