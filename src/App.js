import React from "react";
import "./App.css";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Play cricket" }
    ]
  };

  deleteTodo = id => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  addTodo = todo => {
    todo.id = Math.random();
    console.log(todo);
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  };
  render() {
    return (
      <div className="todo-app container">
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
