'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section className="searchBox">
				<div className="keywordsBox">
					<h2>Keywords</h2>
					<input type="text" ref="keywords" />
				</div>
				<div className="locationBox">
					<h2>Location</h2>
					<input type="text" ref="location" />
				</div>
				<button className="searchButton">Search</button>		
			</section>
			);
	}
});