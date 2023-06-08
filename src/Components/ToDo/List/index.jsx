import React from "react";

function List({ todoList }) {
  return (
    <div>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
