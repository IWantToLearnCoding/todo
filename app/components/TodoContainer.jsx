var React = require('react');
var TodoList = require('TodoList');

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
		}	
	},
	render: function(){
		var {todos} = this.state;
		return (
			<div>
				<p>Todo</p>
				<TodoList todos={todos}/>
			</div>
		);
	}
});

module.exports = TodoContainer;