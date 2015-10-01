'use strict';
var React = require('react');
var JobRow = require('./JobRowComponent');

module.exports = React.createClass({
	render: function() {
		var companies = this.props.companies;
		var jobList = this.props.jobs.map(function(job){
			var companyId = job.get('companyId');
			var company = companies.get(companyId);
			return (
				<JobRow job={job} company={company}/>
				);
		});
		return (
			<div>{jobList}</div>
			)
		}


});