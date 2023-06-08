import { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      item: "Learn React",
      complete: false,
    },
    {
      item: "Learn HTML-CSS",
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
