'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section className="navBar">
				<div className="topBar"></div>
				<div className="menu">
					<div className="logoContainer">
						<img src="../../images/logo.png" />
					</div>
					<h2>Fresh Jobs</h2>
					<a href="#" className="link"><p>JOBS</p></a>
					<a href="#" className="link"><p>COMPANIES</p></a>
					<a href="#" className="link"><p>CITIES</p></a>
					<a href="#" className="link"><p>WHY FRESH?</p></a>
					<a href="#" className="link"><p>FOR EMPLOYERS</p></a>
				</div>
			</section>
			);
	}
});