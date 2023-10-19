import React from "react";
import './todosForm.css'

function TodosFrom() {
  return (
    <form  className="todosForm d-flex flex-column p-3 border">
      <label htmlFor="todoInput">add todo:</label>
      <div className="todosForm-input__content d-flex">
        <input type="text" id="todoInput" className="todosForm__input w-75 border" />
        <button className="fs-6 py-0 btn bg-secondary text-white p-3">AddTask</button>
      </div>
    </form>
  );
}

export default TodosFrom;
