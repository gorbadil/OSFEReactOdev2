import { useState } from "react";

export default function List({ todos, setTodos }) {
  const onClickEvent = (e) => {
    const index = e.target.getAttribute("index");
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };
  const onChangeEvent = (e) => {
    const index = e.target.getAttribute("index");
    const newTodos = [...todos];
    newTodos[index].item = e.target.value;
    setTodos(newTodos);
  };
  const [filtered, setFiltered] = useState(todos);

  const filteredList = (e) => {
    const btn = e.target.getAttribute("btndata");
    const newList = todos.filter((item) => {
      return btn === "complete" ? item.complete : !item.complete;
    });
    setFiltered(newList);
  };
  const allList = () => {
    setFiltered(todos);
  };

  return (
    <div>
      <ul>
        {filtered.map((item, index) => (
          <li key={index} index={index} className="todoitem">
            <input
              type="text"
              index={index}
              value={item.item}
              className={`todoinput ${item.complete ? " done" : "todo"}`}
              onChange={onChangeEvent}
            />
            <span className="editbutton" index={index} onClick={onClickEvent}>
              {item.complete ? "Undone" : "Done"}
            </span>
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button className="choosebtn" onClick={allList}>
          All
        </button>
        <button className="choosebtn" onClick={filteredList}>
          Todos
        </button>
        <button className="choosebtn" btndata="complete" onClick={filteredList}>
          Completed
        </button>
      </div>
    </div>
  );
}
