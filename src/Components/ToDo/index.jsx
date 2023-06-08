import { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      item: "item 1",
      complete: false,
    },
    {
      item: "item 2",
      complete: true,
    },
  ]);
  return (
    <div className="todos">
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}
