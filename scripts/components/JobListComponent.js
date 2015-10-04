'use strict';
var React = require('react');
var JobRow = require('./JobRowComponent');
var CompanyBox = require('./CompanyBoxComponent');
var CreateProfile = require('./CreateProfileComponent');
var SearchBox = require('./SearchBoxComponent');

module.exports = React.createClass({
	render: function() {
		var companies = this.props.companies;
		var jobList = this.props.jobs.map(function(job){
			var companyId = job.get('companyId');
			var company = companies.get(companyId);
			return (
				<JobRow job = {job} company = {company} />
				);
		});
		return (
			<section>
				<section className="jobListContainer">
					<SearchBox />
					<div>{jobList}</div>
				</section>
				<CreateProfile />
				<CompanyBox company = {this.props.companies.at(0)}/>
			</section>
			)
		}
});