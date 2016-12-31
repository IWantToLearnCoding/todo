var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoContainer = React.createClass({
	
	getInitialState: function() {
		return {
			todos: [
				{
					id: 1,
					text: 'go to market'
				},
				{
					id: 2,
					text: 'live life'
				}
			]
		};	
	},

	handleAddTodo: function(newTodo) {
		alert('new todo' + newTodo);
	},

	render: function(){
		var {todos} = this.state;
		return (
			<div>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoContainer;