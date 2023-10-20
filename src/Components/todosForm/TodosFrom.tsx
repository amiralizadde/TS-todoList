import React, { useState } from "react";
import "./todosForm.css";

type TodosFromProps={
  addTodo:(title:string)=>boolean
}

function TodosFrom({addTodo}:TodosFromProps) {
  const [todoValue, setTodoValue] = useState<string>("");

  const handelSubmitTodo = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todoValue) {
      addTodo(todoValue)
      setTodoValue("")
    }
  };

  return (
    <form
      className="todosForm d-flex flex-column p-3 border"
      onSubmit={handelSubmitTodo}
    >
      <label htmlFor="todoInput">add todo:</label>
      <div className="todosForm-input__content d-flex">
        <input
          type="text"
          id="todoInput"
          className="todosForm__input w-75 border"
          value={todoValue}
          onChange={(e)=>setTodoValue(e.target.value) }
        />
        <button
          type="submit"
          className="fs-6 py-0 btn bg-secondary text-white p-3"
        >
          AddTask
        </button>
      </div>
    </form>
  );
}

export default TodosFrom;
