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
});