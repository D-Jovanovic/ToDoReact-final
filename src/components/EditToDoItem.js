import React from "react";

function EditToDoItem({currentTodo, setIsEditing, onEditFormSubmit, onEditInputChange}) {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2>Edit Todo</h2>
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
  );
}

export default EditToDoItem;
