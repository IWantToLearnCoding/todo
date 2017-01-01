var React = require('react');

var TodoSearch = React.createClass({

	handleSearch: function() {
		var showCompleted = this.refs.showCompleted.checked;
		var searchTodo = this.refs.searchTodo.value;

		this.props.onSearch(showCompleted, searchTodo);
	},
	render: function() {
		return (
			<div className="container__header">
				<div>
					<input type="search" ref="searchTodo" placeholder="Search Todos" onChange={this.handleSearch}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
						<span>Show completed Todos</span>
					</label>
				</div>
			</div>
		);
	}
});

module.exports = TodoSearch;