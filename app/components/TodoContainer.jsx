var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

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
		alert('new todo' + newTodo);
	},

	render: function(){
		var {todos} = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoContainer;