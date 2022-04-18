import React from "react";

function AddToDoItem({ inputValue, onAddFormSubmit, onAddInputChange }) {
  return (
    <>
      <form onSubmit={onAddFormSubmit}>
        <h2>Todo App</h2>
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
