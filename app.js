class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			completed: [],
			inputText: ''
		};
	}
	onTypeInput(e) {
		this.setState({inputText: e.target.value});
	}
	onAddClick(e) {
		this.setState({
			todos: this.state.todos.concat(this.state.inputText),
			inputText: ''
		});
	}
	onItemClick(todo, index, e) {
		var newTodos = this.state.todos.slice();
		newTodos.splice(index, 1);
		this.setState({
			todos: newTodos,
			completed: this.state.completed.concat(todo)
		});
	}
	onCompletedClick(todo, index) {
		var newCompleted = this.state.completed.slice();
		newCompleted.splice(index, 1);
		this.setState({completed: newCompleted});
	}
	render() { return (
		<div>
			<h1> React Todo List </h1>
			<hr/>
			<input type="text"
				onChange={this.onTypeInput.bind(this)}
				value={this.state.inputText}
			/>
			<button onClick={this.onAddClick.bind(this)}> Add </button>
			<hr/>
			<h4> Items still to do </h4>
			<ul>
				{this.state.todos.map((todo, index) => 
		 			<Todo todo={todo} 
		 				key={index} 
		 				done={false}
		 				onItemClick={this.onItemClick.bind(this, todo, index)}
		 			/>
				)}
		 	</ul>
		 	<hr/>
		 	<h4> Completed items </h4>
		 	<ul>
				{this.state.completed.map((todo, index) => 
		 			<Todo todo={todo} 
		 				key={index}
		 				done={true} 
		 				onItemClick={this.onCompletedClick.bind(this, todo, index)}
		 			/>
				)}
		 	</ul>
		</div>
	)};
} 

ReactDOM.render(<App />, document.getElementById('app'));