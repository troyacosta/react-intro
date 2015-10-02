'use strict';

var React = require('react');
var Backbone= require('backbone');
var JobNavigationComponent = require('./components/JobNavigationComponent');
var JobFormComponent = require('./components/JobFormComponent');
var JobListComponent = require('./components/JobListComponent');
var JobDetailsComponent = require('./components/JobDetailsComponent');
var JobCollection = require('./collections/JobCollection');
var CompanyCollection = require('./collections/CompanyCollection');
var CompanyModel = require('./models/CompanyModel');
var JobModel = require('./models/JobModel');

var jobList = new JobCollection(); 
var companyList = new CompanyCollection();

var companyModel = new CompanyModel();
companyList.add(companyModel);

var jobModel = new JobModel();
jobList.add(jobModel);

var main = document.getElementById('main');	

var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'jobs': 'jobs',
        'companies': 'companies',
        'cities': 'cities',
        'whyFresh': 'whyFresh',
        'forEmployers': 'forEmployers',
        'details': 'details'
    },
    home: function() {
    	React.render(
    		<div>
        		<JobNavigationComponent />
            </div>,
            main
    		);
    },
    jobs: function() {
    	React.render(
    		<div>
        		<JobNavigationComponent />
        		<JobListComponent jobs = {jobList} companies = {companyList} />
            </div>,
            main
            );
    },
    forEmployers: function() {
    	React.render(
    		<div>
        		<JobNavigationComponent />
        		<JobFormComponent jobs = {jobList} companies = {companyList} router= {this}/>
            </div>,
            main
            );
    },
    cities: function() {
    	React.render(
    		<div>
        		<JobNavigationComponent />
            </div>,
            main
            );
    },
    companies: function() {
    	React.render(
    		<div>
        		<JobNavigationComponent />
            </div>,
            main
            );
    },
    whyFresh: function() {
    	React.render(
    		<div>
        		<JobNavigationComponent />
            </div>,
            main
            );
    },
    details: function() {
    	React.render(
    		<div>
    			<JobNavigationComponent />
    			<JobDetailsComponent jobs = {jobList} companies = {companyList}/>
    		</div>,
    		main
    		);
    }
});
 
var router = new Router;
Backbone.history.start();        		
        	