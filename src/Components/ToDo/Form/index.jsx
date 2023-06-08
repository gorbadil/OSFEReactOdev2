import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todovalue, setTodoValue] = useState("");
  const onChangeEvent = (e) => {
    setTodoValue(e.target.value);
  };
  const onSubmitEvent = (e) => {
    e.preventDefault();
    if (todovalue === "") {
      alert("Please enter a todo");
      return;
    }
    setTodos([
      ...todos,
      {
        item: todovalue,
        complete: false,
      },
    ]);
    setTodoValue("");
  };
  return (
    <div>
      <div>
        <form onSubmit={onSubmitEvent}>
          <input
            value={todovalue}
            placeholder="Add To-Do"
            onChange={onChangeEvent}
          />
          <button className="addButton">Add To Do</button>
        </form>
      </div>
    </div>
  );
}
