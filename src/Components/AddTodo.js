import React from "react";


const AddTodo = ({addTodo}) => {

  return (
    <div className="AddTodo">
      <button onClick = {addTodo}>Add Another</button>
    </div>
  );
}
export default AddTodo;