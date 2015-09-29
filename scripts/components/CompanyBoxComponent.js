'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section className="companyBoxContainer">
				<h1>Featured Company</h1>
				<div className="companyBox">
					<hr />
					<img className="bgImage" src={this.props.model.get('bgImage')} />
					<img className="logo" src={this.props.model.get('logo')} />
					<p className="name">{this.props.model.get('name')}</p>
					<p className="location">{this.props.model.get('location')}</p>
				</div>
			</section>
			)
	}
});