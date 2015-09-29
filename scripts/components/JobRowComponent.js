'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section className="jobRowContainer">
				<div className="jobRow">
					<h2>{this.props.jobModel.get('title')}{this.props.jobModel.get('date')}</h2>
					<h3>{this.props.companyModel.get('name')}{this.props.companyModel.get('location')}</h3>
					<p>{this.props.jobModel.get('description')}</p>
					<p>{this.props.jobModel.get('tags')}</p>
				</div>
			</section>
			);
	}
});