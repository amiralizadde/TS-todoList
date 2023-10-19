import React from "react";
import './todosWrapper.css'
import TodosFrom from "../todosForm/TodosFrom";
import TodoItems from "../todosItems/TodoItems";

function TodosWrapper() {
  return (
    <div className="todoWrapper__content d-flex flex-column mx-auto  justify-content-center align-items-center border bg-light">
        <p className="text-center h3 mb-4">Amir Alizade 💖</p>

         <TodosFrom />
         <TodoItems />

    </div>
  );
}

export default TodosWrapper;
