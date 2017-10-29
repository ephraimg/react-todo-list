class Todo extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() {
    var style = {
      textDecoration: this.props.done ? 'line-through' : 'none'
    };
    return (
      <li onClick={this.props.onItemClick}
        style={style}
      > {this.props.todo} </li>
    );
  }
}

window.Todo = Todo;