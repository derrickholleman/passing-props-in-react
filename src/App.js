import React, { useState } from "react";
import './App.css';
import AddTodo from './Components/AddTodo';

export default function App() {

  // set initial value of state 
  const [count, setCount] = useState(5)

  // initialize addOne method and setState function to increment state by +1 on click
  const addOne = () => {
    setCount((count) => count + 1)
  }

    return (
      <div className="App">
        <h1>ToDo List</h1>
        <p>Just keep giving me things to do</p>
        <p>I still have {count} things to do</p>

        <AddTodo addTodo={addOne}/>
      </div>
    );
}