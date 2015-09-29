'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section className="jobRowContainer">
				<div className="jobRow">
					<h2>{this.props.jobModel.get('title')}</h2>
					<p className="date">{this.props.jobModel.get('date')}</p>
					<h3>{this.props.companyModel.get('name')}{this.props.companyModel.get('location')}</h3>
					<p>{this.props.jobModel.get('description')}</p>
					<span className="tag">{this.props.jobModel.get('tags')}</span>
				</div>
				<hr />
			</section>
			);
	}
});