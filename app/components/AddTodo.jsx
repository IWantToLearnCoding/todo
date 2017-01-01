var React = require('react');

var AddTodo = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var todoText = this.refs.enteredTodo.value;
		if (todoText.length > 0) {
			this.refs.enteredTodo.value = '';
			this.props.onAddTodo(todoText);
		} else {
			this.refs.enteredTodo.focus();
		}
	},
	render: function() {
		
		return (
			<div className="container__footer">
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Enter To do" ref="enteredTodo"/>
					<button className="button expanded">Add ToDo</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;