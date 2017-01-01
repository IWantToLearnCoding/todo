var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	handleToggle: function(e, id) {
		this.props.onToggle(this.props.id);
	},
	render: function () {
		var {text, completed, createdAt, completedAt} = this.props;
		var renderDate = () => {
			var message = 'Created At: ';
			var timestamp = createdAt;

			if(completed) {
				message = 'Completed: ';
				timestamp = completedAt;
			}
			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm A');
		};
		return (
			<div onClick={this.handleToggle}>
				<input type="checkbox" checked={completed}/>
				<p>{text}</p>
				<p>{renderDate()}</p>
			</div>
		);		
	}
});

module.exports = Todo;