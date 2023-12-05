import React, { useState } from "react";

const Todo = () => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, index) =>{
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}></div>
  })
};

export default Todo;
