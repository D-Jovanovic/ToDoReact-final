import React from "react";

import style from "./SearchToDoItem.module.css"


function SearchToDoItem({setFilter}) {
  return (
    <div className={style.formHolder}>
      <label htmlFor="search" >Search:</label>
      <input
        name="search"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchToDoItem;
