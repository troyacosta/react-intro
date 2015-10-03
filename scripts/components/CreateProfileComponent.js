'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section className="createProfileContainer">
				<h1>Looking for a job?</h1>
				<hr />
				<h3>Create a Fresh Jobs profile and <span>let employers come to you.</span></h3>
				<ul>
					<li>Employers search our database and come to you</li>
					<li>Import easily from LinkedIn</li>
					<li>Link to Stack Overflow, GitHub, CodePlexand more.</li>
				</ul>	
				<button>Create a Profile</button>
			</section>
			);
	}
});