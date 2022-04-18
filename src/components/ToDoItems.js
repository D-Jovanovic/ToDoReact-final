import React from "react";

function ToDoItems({ todo, filter, onHandleEditClick, onHandleDeleteClick }) {
  return (
    <>
      {todo
        .filter((item) => {
          if (filter === "") {
            return item;
          } else if (item.title.toLowerCase().includes(filter.toLowerCase())) {
            return item;
          }
        })
        .map((item, key) => {
          return (
            <li key={key}>
              {item.title}{" "}
              <button onClick={() => onHandleEditClick(item)}>Edit</button>
              <button onClick={() => onHandleDeleteClick(item)}>X</button>
            </li>
          );
        })}
    </>
  );
}

export default ToDoItems;
