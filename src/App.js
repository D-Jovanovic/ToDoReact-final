import React, { useState } from "react";
import { v4 } from "uuid";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([
    { id: v4(), title: "jabuka" },
    { id: v4(), title: "kruska" },
    { id: v4(), title: "banana" },
    { id: v4(), title: "sljiva" },
    { id: v4(), title: "pomorandza" },
    { id: v4(), title: "breskva" },
    { id: v4(), title: "kajsija" },
    { id: v4(), title: "orah" },
    { id: v4(), title: "badem" },
    { id: v4(), title: "avokado" },
    { id: v4(), title: "mandarina" },
  ]);

  const [filter, setFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  //Dodavanje
  const formSubmit = (event) => {
    event.preventDefault();
    setTodo([...todo, { id: v4(), title: inputValue }]);
    setInputValue("");
  };
  //Brisanje
  const deleteHandler = ({ id }) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  //Paginacija
  const pages = [];
  for (let i = 1; i < Math.ceil(todo.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const pageNumbers = pages.map((num) => {
    return (
      <li key={num} id={num}>
        {num}
      </li>
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = todo.slice(indexOfFirstItem, indexOfLastItem);
  


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
            <li key={key}>
              {item.title}{" "}
              <button onClick={() => deleteHandler(item)}>X</button>
            </li>
          );
        })}
      <div>
        <ul className="pageNumbers">{pageNumbers}</ul>
      </div>
      
    </div>
  );
}

export default App;
