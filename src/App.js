import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [todo, setTodo] = useState([
    { title: "jabuka" },
    { title: "kruska" },
    { title: "banana" },
    { title: "sljiva" },
    { title: "pomorandza" },
    { title: "breskva" },
    { title: "kajsija" },
    { title: "orah" },
    { title: "badem" },
    { title: "avokado" },
    { title: "mandarina" },
  ]);

  const [filter, setFilter] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    setTodo([...todo, {title: inputValue}]);
    setInputValue("");
}

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Add..."
          className="#"
          value={inputValue}
          required
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button className="#" type="submit">
          Add
        </button>
      </form>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />
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
            <div key={key}>
              <li>{item.title}</li>
            </div>
          );
        })}
    </div>
  );
}

export default App;
