import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function ToDo() {
  const [todoList, setTodoList] = useState(["birinci", "ikinci"]);
  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <List todoList={todoList} />
    </div>
  );
}

export default ToDo;
