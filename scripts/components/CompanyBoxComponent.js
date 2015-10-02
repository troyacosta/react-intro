'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section className="companyBoxContainer">
				<h1>Featured Company</h1>
				<div className="companyBox">
					<hr />
					<div className="imageContainer">
						<img className="bgImage" src={this.props.company.get('bgImage')} />
						<img className="logo" src={this.props.company.get('logo')} />
					</div>
					<p className="name">{this.props.company.get('companyName')}</p>
					<p className="location">{this.props.company.get('location')}</p>
				</div>
			</section>
			)
	}
});