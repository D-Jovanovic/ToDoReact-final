import React from "react";

function SearchToDoItem({setFilter}) {
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input
        name="search"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />
    </>
  );
}

export default SearchToDoItem;
