import React from "react";
import "../src/TodoList.css";
function TodoList(props) {
  return (
    <>
      <div className="todo-style mt-3">
        <li>{props.text}</li>
        <button
          className="btn btn-primary ml-5"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Edit
        </button>
        <button
          className="btn- btn-danger ml-5"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
      </div>
    </>
  );
}

export default TodoList;
