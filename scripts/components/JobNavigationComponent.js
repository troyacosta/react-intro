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
					<a href="#jobs" className="link">JOBS</a>
					<a href="#companies" className="link">COMPANIES</a>
					<a href="#cities" className="link">CITIES</a>
					<a href="#whyFresh" className="link">WHY FRESH?</a>
					<a href="#forEmployers" className="link">FOR EMPLOYERS</a>
				</div>
			</section>
			);
	}
});