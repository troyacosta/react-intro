'use strict';
var React = require('react');
var JobNavigationComponent = require('./JobNavigationComponent');
var JobTipsComponent = require('./JobTipsComponent');
var JobFormComponent = require('./JobFormComponent');

module.exports = React.createClass({
    render: function() {
        return (
        	<div>
        		<JobNavigationComponent />
        		<JobTipsComponent />
        		<JobFormComponent />
        	</div>
        	);
    }
});
