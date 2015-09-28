'use strict';
var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
        	<section className="jobTipsContainer">
        		<h3 className="">Tips for your job posting</h3>
        		<hr />
        		<p><strong>Add Keywords</strong> because the majority of canidates
        		search for available positions using keywords. Make sure you use
        		all relevant keywords in your posting.</p>
        		<p><strong>Use Familiar Job Titles.</strong> Use specific but Familiar
        		job titles in your posting. Make sure the titles are clear and succinct.</p>
        		<p><strong>Give Them Details.</strong> The purpose of posting a job is to spark
        		a canidates interest in a position. When job postings have detailed descriptions,
        		 canidates tend to apply to them more.</p>
        		<p><strong>Expand Your Location.</strong> Do not limit your job posting to a restricted
        		 area around the jobs location. Make sure to include surrounding cities and metropolitan 
        		 areas in your searches.</p>
        		<p><strong>Discuss Compensation.</strong> Even though you may not want to give an exact
        		 compensation , give a range. Make sure to point out any bonuses, commissions, or 
        		  non-monetary compensation, as well.</p>
        	</section>
        	);
    }
});
