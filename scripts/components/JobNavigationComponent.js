'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section className="navBar">
				<div className="menuContainer">
					<div className="logoContainer">
						<img src="../../images/logo.png" />
					</div>
					<h1>Fresh Jobs</h1>
					<a href="#" className="link">JOBS</a>
					<a href="#" className="link">COMPANIES</a>
					<a href="#" className="link">CITIES</a>
					<a href="#" className="link">WHY FRESH?</a>
					<a href="#" className="link">FOR EMPLOYERS</a>
				</div>
			</section>
			);
	}
});