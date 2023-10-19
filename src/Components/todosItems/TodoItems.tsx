import React from "react";
import './todoItems.css'

function TodoItems() {
  return (
    <div className="todoItem my-2  w-100 ">
      <div className="d-flex justify-content-between align-items-center  mx-2  border">
        <p className="todoItem__title ps-2 completed">
          learning typeScript
        </p>
        <button className="btn bg-secondary text-white">حذف</button>
      </div>
    </div>
  );
}

export default TodoItems;
