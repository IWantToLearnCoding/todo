var React = require('react');

var Todo = React.createClass({
	handleToggle: function(e, id) {
		this.props.onToggle(this.props.id);
	},
	render: function () {
		var {text, completed} = this.props;
		return (
			<div onClick={this.handleToggle}>
				<input type="checkbox" checked={completed}/>
				{text}
			</div>
		);		
	}
});

module.exports = Todo;