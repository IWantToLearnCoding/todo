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
		expect(todoContainer.state.todos[0].createdAt).toBeA('number');
	});

	it('should toggle completed value when handleToggle called', () => {
		var todoData = {
			id: 1,
			text: 'Testing',
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};

		var todoContainer = TestUtils.renderIntoDocument(<TodoContainer/>);
		todoContainer.setState({todos: [todoData]});

		expect(todoContainer.state.todos[0].text).toBe('Testing');
		expect(todoContainer.state.todos[0].completed).toBe(false);
		todoContainer.handleToggle(1);
		expect(todoContainer.state.todos[0].completed).toBe(true);
		expect(todoContainer.state.todos[0].completedAt).toBeA('number');
	});

	it('should toggle todo from completed to incomplete', () => {
		var todoData = {
			id: 1,
			text: 'Testing',
			completed: true,
			createdAt: 0,
			completedAt: 234342
		};

		var todoContainer = TestUtils.renderIntoDocument(<TodoContainer/>);
		todoContainer.setState({todos: [todoData]});

		expect(todoContainer.state.todos[0].text).toBe('Testing');
		expect(todoContainer.state.todos[0].completed).toBe(true);
		todoContainer.handleToggle(1);
		expect(todoContainer.state.todos[0].completed).toBe(false);
		expect(todoContainer.state.todos[0].completedAt).toNotExist();
	});
});