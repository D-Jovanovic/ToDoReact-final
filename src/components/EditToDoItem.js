import React from "react";

import style from "./EditToDoItem.module.css"

function EditToDoItem({
  currentTodo,
  setIsEditing,
  onEditFormSubmit,
  onEditInputChange,
}) {
  return (
    <>
      <h2 className={style.headerCenter}>Todo App</h2>
      <form onSubmit={onEditFormSubmit} className={style.formHolder}>
        <label htmlFor="editTodo">Edit todo: </label>
        <input
          name="editTodo"
          type="text"
          placeholder="Edit todo"
          value={currentTodo}
          onChange={onEditInputChange}
        />
        <button type="submit">Update</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    </>
  );
}

export default EditToDoItem;
