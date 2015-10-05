'use strict';
var React = require('react');
var CompanyBox = require('./CompanyBoxComponent');
var Job = require('./JobRowComponent');

module.exports = React.createClass({
	details: function() {
				this.props.router.navigate('details', {trigger: true});
			},
	render: function() {
				return (
					<section>
						<CompanyBox company = {this.props.companies.at(0)}/>
					</section>
				);
		}
});