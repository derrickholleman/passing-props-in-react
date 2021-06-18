import React from "react";
import './App.css';
import AddTodo from './Components/AddTodo';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: 5
    };
  }

  addTodo = () => {
    this.setState(
      {
        todos: this.state.todos + 1
      }
    )
  }

  /*
      add a method called addTodo() that increments
      this.state.todos by 1

      pass the method down to the AddTodo component
      tie it to the onClick event of the button inside of AddTodo

      do not touch state or any of the other JSX
    */

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <p>Just keep giving me things to do</p>
        <p>I still have {this.state.todos} things to do</p>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}
