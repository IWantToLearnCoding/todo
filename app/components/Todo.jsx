var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	handleToggle: function(e, id) {
		this.props.onToggle(this.props.id);
	},
	render: function () {
		var {text, completed, createdAt, completedAt} = this.props;
		var todoClassName = completed ? 'todo todo-completed' : 'todo';

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
			<div className={todoClassName} onClick={this.handleToggle}>
				<div>
					<input type="checkbox" checked={completed}/>
				</div>
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
				
			</div>
		);		
	}
});

module.exports = Todo;