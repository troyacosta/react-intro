'use strict';
var React = require('react');


module.exports = React.createClass({
	render: function() {
		return (
			<section className="jobRowContainer">
				<div className="jobRow">
					<hr />
					<h2><a href="#details" onClick={this.details}>{this.props.job.get('title')}</a></h2>
					<p className="date">{this.props.job.get('date')}</p>
					<h3>{this.props.company.get('companyName')} • <span className="location">{this.props.job.get('location')}</span></h3>
					<p>{this.props.job.get('description')}</p>
					<span className="tag">{this.props.job.get('tags')}</span>
				</div>
			</section>
			);
	}
});