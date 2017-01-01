// var $ = require('jquery');

module.exports = {
	setTodos: function(todos) {
		if($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},

	getTodos: function(todo) {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch(e) {
			console.log(e + 'corrupt data');
		}
		return $.isArray(todos) ? todos : [];
	},

	filterTodos: function(todos, showCompleted, searchTodo) {
		var filteredTodos = todos;

		// filter todos by showCompleted
		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted;
		});

		// filter todos by searchTodo
		filteredTodos = filteredTodos.filter((todo) => {
			var search = searchTodo.toLowerCase();
			var text = todo.text.toLowerCase();
			return search.length === 0 || text.indexOf(search) > -1;
		});
		
		// sort to show incomplete todos first
		filteredTodos.sort((a, b) => {
			if(a.completed && b.completed) {
				return -1;
			} else if(a.completed && !b.completed) {
				return 1
			} else {
				return 0;
			}
		})

		return filteredTodos;
	}
}