var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodo', () => {
		beforeEach(() => {
			localStorage.removeItem('todos');
		});

		it('should valid Array to todos', () => {
			var todos = [
				{
					id: 1,
					text: 'Testing',
					completed: false
				}
			];
			TodoAPI.setTodos(todos);
			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		});

		it('should not set invalid todo array to localStorage(todos)', () => {
			var invalidTodos = 1;
			TodoAPI.setTodos(invalidTodos);
			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(localStorage.getItem('todos')).toBe(null);
		});
	});

	describe('getTodo', () => {
		it('should return empty array for invalid localStorage todos', () => {
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});

		it('should return todos array for valid localStorage todos', () => {
			var todos = [
				{
					id: 1,
					text: 'Testing',
					completed: false
				}
			];
			localStorage.setItem('todos', JSON.stringify(todos));
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual(todos);
		});
	});

	describe('filterTodos', () => {
		var todos = [
				{
					id: 1,
					text: 'Testing',
					completed: false
				},
				{
					id: 2,
					text: 'Testing2',
					completed: true
				},
				{
					id: 3,
					text: 'Testi23',
					completed: false
				}
			];

		it('should return all items if showCompleted is checked', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});

		it('should return only uncompleted todos if showCompleted is not checked', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(2);
		});

		it('should sort by completed status', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
			expect(filteredTodos[0].completed).toBe(false);
			expect(filteredTodos[2].id).toBe(2);
			expect(filteredTodos[2].completed).toBe(true);
		});

		it('should return only all todos when searchTodo is empty', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});

		it('should return only those todos which contain searchTodo string', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'Testing');
			expect(filteredTodos.length).toBe(2);
		});
	});

});