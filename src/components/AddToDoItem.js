import React from "react";

import style from "./AddToDoItem.module.css";

function AddToDoItem({ inputValue, onAddFormSubmit, onAddInputChange }) {
  return (
    <>
    <h2 className={style.headerCenter}>Todo App</h2>
      <form onSubmit={onAddFormSubmit} className={style.formHolder}>
        <label htmlFor="todo">Add todo: </label>
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          value={inputValue}
          required
          onChange={onAddInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddToDoItem;
