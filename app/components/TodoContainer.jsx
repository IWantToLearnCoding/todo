var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoContainer = React.createClass({
	
	getInitialState: function() {
		return {
			todos: [
				{
					id: uuid(),
					text: 'go to market',
					completed: false
				},
				{
					id: uuid(),
					text: 'live life',
					completed: true
				}
			],
			showCompleted: false,
			searchTodo: ''
		};	
	},

	handleSearch: function(showCompleted, searchTodo) {
		this.setState({
			showCompleted: showCompleted,
			searchTodo: searchTodo.toLowerCase()
		})
	},

	handleAddTodo: function(newTodo) {
		this.setState({
			todos: [ ...this.state.todos, 
			{
				id: uuid(),
				text: newTodo,
				completed: false
			}]
		});
	},

	handleToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({todos: updatedTodos});
	}, 

	render: function(){
		var {todos} = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoContainer;