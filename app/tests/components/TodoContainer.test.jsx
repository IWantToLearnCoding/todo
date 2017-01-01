var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoContainer = require('TodoContainer');

describe('TodoContainer', () => {
	it('should exist', () => {
		expect(TodoContainer).toExist();
	});

	it('should add Todo to the todos list on handleAddTodo', () => {
		var newTodo = "Wow!";
		var todoContainer = TestUtils.renderIntoDocument(<TodoContainer/>);

		todoContainer.setState({todos: []});
		todoContainer.handleAddTodo(newTodo);
		expect(todoContainer.state.todos[0].text).toBe(newTodo);

	});

	it('should toggle completed value when handleToggle called', () => {
		var todoData = {
			id: 1,
			text: 'Testing',
			completed: false
		};

		var todoContainer = TestUtils.renderIntoDocument(<TodoContainer/>);
		todoContainer.setState({todos: [todoData]});

		expect(todoContainer.state.todos[0].text).toBe('Testing');
		expect(todoContainer.state.todos[0].completed).toBe(false);
		todoContainer.handleToggle(1);
		expect(todoContainer.state.todos[0].completed).toBe(true);
	});
});