'use strict';
var React = require('react');
var JobNavigationComponent = require('./JobNavigationComponent');
var JobTipsComponent = require('./JobTipsComponent');
var JobFormComponent = require('./JobFormComponent');
var JobRowComponent = require('./JobRowComponent');
var CompanyBoxComponent = require('./CompanyBoxComponent');
var JobModel = require('../models/jobModel');
var CompanyModel = require('../models/companyModel');

var JobModel1 = new JobModel({title: 'Frontend Engineer', description: 'Frontend Engineer. Solve hard problems with a team.', 
	date: new Date().toDateString(), tags: ['javascript', ' css']});
var CompanyModel1 = new CompanyModel({name: 'NSONE', location: 'New York, NY.'});
var CompanyBoxModel = new CompanyModel({name:'MaxPlay', location: 'Austin, TX.', logo: '../../images/featured-logo.jpg', bgImage: '../../images/featured.jpg'})

module.exports = React.createClass({
    render: function() {
        return (
        	<div>
        		<JobNavigationComponent />
        		<JobFormComponent />
        		<JobTipsComponent /> 
        		<JobRowComponent jobModel = {JobModel1} companyModel = {CompanyModel1} />
        		<CompanyBoxComponent model = {CompanyBoxModel}/>
        	</div>
        	);
    }
});
