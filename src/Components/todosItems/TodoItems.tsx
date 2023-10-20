import React from "react";
import './todoItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {Todo} from '../types/todos.types'

type TodoItemsProps={
  todoItem:Todo;
  deleteTodo:(id:string)=>boolean;
}

function TodoItems({todoItem , deleteTodo}:TodoItemsProps) {
  return (
    <div className="todoItem my-2  w-100 ">
      <div className="d-flex justify-content-between align-items-center  mx-2  border">
        <p className={`todoItem__title ps-2 ${todoItem.completed ? 'completed':""}`}>
          {todoItem.title}
        </p>
        <button className="btn bg-secondary text-white" onClick={()=>deleteTodo(todoItem.id)}>
         <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default TodoItems;
