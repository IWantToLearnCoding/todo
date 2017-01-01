var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render 1 todo component for each todo in the list', () => {
		var todos = [
			{
				id: 1,
				text: 'First task'
			},
			{
				id:2,
				text: 'Second one'
			}
		];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var todoComps = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
		expect(todoComps.length).toBe(todos.length);
	});

	it('should render container message if no todos', () => {
		var todos = [];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);
	});
});