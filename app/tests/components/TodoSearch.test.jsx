var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should call onSearch when todoSearch input changes', () => {
		var searchTodo = 'Dog';
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
		//var $el = $(ReactDOM.findDOMNode(todoSearch));

		todoSearch.refs.searchTodo.value = searchTodo;
		TestUtils.Simulate.change(todoSearch.refs.searchTodo);
		expect(spy).toHaveBeenCalledWith(false, 'Dog');
	});

	it('should call onSearch with correct showCompleted value', () => {
		var searchTodo = '';
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
		//var $el = $(ReactDOM.findDOMNode(todoSearch));

		todoSearch.refs.showCompleted.checked = true;
		todoSearch.refs.searchTodo.value = searchTodo;
		TestUtils.Simulate.change(todoSearch.refs.searchTodo);
		expect(spy).toHaveBeenCalledWith(true, '');
	});
});