import React, { useState } from "react";
import { v4 } from "uuid";

import "./App.css";

function App() {
  //state za vrednost u inputu
  const [inputValue, setInputValue] = useState("");
  //state za todo listu
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

  //state za search filter pretragu
  const [filter, setFilter] = useState("");

  //state paginacija trenutna strana
  const [currentPage, setCurrentPage] = useState(1);
  //state paginacija stavki po strani
  const [itemsPerPage, setItemsPerPage] = useState(5);

  //state za pracenje da li editujemo todo stavku
  const [isEditing, setIsEditing] = useState(false);
  //state kako bi znao koju todo stavku menjam
  const [currentTodo, setCurrentTodo] = useState({});

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

  //Edit
  /*
  const handleEditInputChange(event) {
    setCurrentTodo({...currentTodo, title: event.target.value});
    console.log(currentTodo);
  }
  */
 
  //Paginacija
  const pages = [];
  for (let i = 1; i < Math.ceil(todo.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pageNumbers = pages.map((num) => {
    return (
      <li
        key={num}
        id={num}
        onClick={handleClick}
        className={currentPage === num ? "active" : ""}
      >
        {num}
      </li>
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = todo.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);

  return (
    <div className="todoHolder">
      <h1>To Do App</h1>
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
