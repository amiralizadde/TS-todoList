import React, { useState } from "react";
import "./todosWrapper.css";
import TodosFrom from "../todosForm/TodosFrom";
import TodoItems from "../todosItems/TodoItems";
import { Todo as todoTypes } from "../types/todos.types";
import swal from "sweetalert";

function TodosWrapper() {
  const [todo, setTodo] = useState<todoTypes[]>([]);

  const addTodo = (title: string) => {
    setTodo((prevState) => [
      ...prevState,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
    return true;
  };

  const deleteTodo = (id: string) => {
    swal({
      title: " Delete Todo? ",
      text: "Are you sure that you want to delete todo?",
      icon: "warning",
      dangerMode: true,
    }).then(
      (result) =>
        result && setTodo(todo.filter((todoItem) => todoItem.id !== id))
    );

    return true;
  };

  const toggleTodo = (id: string) => {
   setTodo(todo.map(todoItem=>(todoItem.id === id) ?{...todoItem , completed:!todoItem.completed} : (todoItem) )) 

    return true;
  };

  return (
    <div className="todoWrapper__content d-flex flex-column mx-auto  justify-content-center align-items-center border bg-light">
      <p className="text-center h3 mb-4"> Amir Alizade 💖 </p>
      {/* Add new Todo */}
      <TodosFrom addTodo={addTodo} />

      {/* Todo list items */}
      {todo.map((todoItem) => (
        <TodoItems
          key={todoItem.id}
          todoItem={todoItem}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodosWrapper;
