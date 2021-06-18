import React from "react";


const AddTodo = (props) => {

  return (
    <div className="AddTodo">
      <button onClick = {() => props.addTodo()}>Add Another</button>
    </div>
  );
}
export default AddTodo;