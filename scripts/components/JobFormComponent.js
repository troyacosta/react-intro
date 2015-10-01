'use strict';
var React = require('react');

module.exports = React.createClass({
	submit: function(e) {
			e.preventDefault();
			console.log('job form submit')
				var newJob = this.props.jobs.add({
					title: this.refs.title.getDOMNode().value,
					description: this.refs.description.getDOMNode().value,
					location: this.refs.location.getDOMNode().value,
					companyName: this.refs.companyName.getDOMNode().value,
					tags: this.refs.tags.getDOMNode().value
				});
				var newCompany = this.props.companies.add({
					companyName: this.refs.companyName.getDOMNode().value
				});
				newJob.set({'companyId': newCompany.cid});
				this.refs.title.getDOMNode().value = '';
				this.refs.description.getDOMNode().value = '';
				this.refs.location.getDOMNode().value = '';
				this.refs.companyName.getDOMNode().value = '';
				this.refs.tags.getDOMNode().value = '';
		},
	render: function() {
		return (
			<section className="jobForm">
				<form onSubmit={this.submit}>
					<h2>Post your job</h2>
					<p>Title</p>
					<input type="text" ref="title"/>
					<p>Company Name</p>
					<input type="text" ref="companyName"/>
					<p>Location</p>
					<input type="text" ref="location"/>
					<p>Description</p>
					<textarea type="text" ref="description"></textarea>
					<p>Tags</p>
					<input type="text" ref="tags"/>
					<button>Submit Job</button>
				</form>
			</section>
			);
	}
});