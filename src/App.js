import React, { useState } from "react";
import './App.css';
import AddTodo from './Components/AddTodo';

export default function App() {

  // set initial value of state and is passed to {this.state.todos}
  const [count, setCount] = useState(5)

  // initialize addOne method and setState function to increment state by +1 on click
  const addOne = () => {
    setCount((count) => count + 1)
  }

  /*
      add a method called addOne() that increments
      this.state.todos by 1

      pass the method down to the AddTodo component
      tie it to the onClick event of the button inside of AddTodo

      do not touch state or any of the other JSX
    */

    return (
      <div className="App">
        <h1>ToDo List</h1>
        <p>Just keep giving me things to do</p>
        <p>I still have {count} things to do</p>

        <AddTodo addTodo={addOne}/>
      </div>
    );
}
// {this.addOne} in child component is passed from addOne method. addTodo is initialized as props and then used in an onClick function in child component.
