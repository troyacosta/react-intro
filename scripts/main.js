'use strict';

var React = require('react');
var Backbone= require('backbone');
var AppComponent = require('./components/AppComponent.js');

React.render(
	<AppComponent />,
	document.getElementById('jobBoard')
	);
