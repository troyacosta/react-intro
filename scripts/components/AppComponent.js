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

var jobList = new JobCollection(); 
var companyList = new CompanyCollection();

// var CompanyBoxModel = new CompanyModel({name:'MaxPlay', location: 'Austin, TX.', logo: '../../images/featured-logo.jpg', bgImage: '../../images/featured.jpg'});

module.exports = React.createClass({
    componentDidMount: function() {
        var that = this
          // jobList.on('add', function() {
          //   that.forceUpdate();
          // })
    },
    render: function() {
        return (
        	<div>
        		<JobNavigationComponent />
        		<JobFormComponent jobs = {jobList} companies = {companyList} />
        		<JobTipsComponent /> 
        		<JobListComponent jobs = {jobList} companies = {companyList} />      		
        	</div>
        	);
    }
});
