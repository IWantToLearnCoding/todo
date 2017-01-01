var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoContainer = React.createClass({
	
	getInitialState: function() {
		return {
			todos: TodoAPI.getTodos(),
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
				completed: false,
				createdAt: moment().unix(),
				completedAt: undefined
			}]
		});
	},

	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
	},

	handleToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}
			return todo;
		});
		this.setState({todos: updatedTodos});
	}, 

	render: function(){
		var {todos, showCompleted, searchTodo} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchTodo);
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoContainer;