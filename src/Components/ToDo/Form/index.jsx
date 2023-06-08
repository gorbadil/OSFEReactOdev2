import React, { useState } from "react";

function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");
  const onChangeEvent = (e) => {
    setTodo(e.target.value);
  };
    const setSubmit = (e) => {
      e.preventDefault()
        setTodoList([...todoList, todo]);
        setTodo("")
  };
  return (
    <div>
      <form onSubmit={setSubmit}>
        <input
          placeholder="Add ToDo To List"
          onChange={onChangeEvent}
          value={todo}
        />
        <button>Add ToDo</button>
      </form>
    </div>
  );
}

export default Form;
