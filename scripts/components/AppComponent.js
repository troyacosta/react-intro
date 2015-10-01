'use strict';
var React = require('react');
var Backbone = require('backbone');
var JobNavigationComponent = require('./JobNavigationComponent');
var JobTipsComponent = require('./JobTipsComponent');
var JobFormComponent = require('./JobFormComponent');
var JobListComponent = require('./JobListComponent');
// var CompanyBoxComponent = require('./CompanyBoxComponent');
var JobCollection = require('../collections/JobCollection');
var CompanyCollection = require('../collections/CompanyCollection');

var jobList = new JobCollection([
    {title: 'Frontend Engineer', discription: 'Frontend Engineer. Solve hard problems with a team.', 
    date: new Date().toString(), tags: ['javascript', ' css'], companyId: 1}
    ]);
var companyList = new CompanyCollection([
    {id: 1, name: 'NSONE', location: 'New York, NY.'}
    ]);

// var CompanyBoxModel = new CompanyModel({name:'MaxPlay', location: 'Austin, TX.', logo: '../../images/featured-logo.jpg', bgImage: '../../images/featured.jpg'});

module.exports = React.createClass({
    render: function() {
        return (
        	<div>
        		<JobNavigationComponent />
        		<JobFormComponent />
        		<JobTipsComponent /> 
        		<JobListComponent jobs = {jobList} companies = {companyList} />
        		
        	</div>
        	);
    }
});
