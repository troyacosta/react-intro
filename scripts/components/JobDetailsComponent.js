'use strict';
var React = require('react');
var CompanyBox = require('./CompanyBoxComponent');  

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				<div className="jobDetails">
				</div>
				<CompanyBox company = {this.props.companies.at(0)}/>
			</section>
			);
	}
});