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
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  //uzimanje vrednosti inputa i kreiranje novog steta
  const handleEditInputChange = (event) => {
    setCurrentTodo({ ...currentTodo, title: event.target.value });
  };

  //update to do  kad je form submited
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  //funkcija za editovanje todo stavke
  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todo.map((item) => {
      return item.id === id ? updatedTodo : item;
    });
    //poziva se unutar onSubmit funkcije;podatak je submitovan i vise ne editujemo
    setIsEditing(false);
    setTodo(updatedItem);
  };

  const handleEditClick = (item) => {
    setIsEditing(true);
    //setujem currentTodo na todo na koji je kliknuto
    setCurrentTodo({ ...item });
  };

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
      {/*<h1>To Do App</h1>
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
      />*/}
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <h2>Edit Todo</h2>
          <label htmlFor="editTodo">Edit todo: </label>
          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentTodo.title}
            onChange={handleEditInputChange}
          />
          <button type="submit">Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <form onSubmit={formSubmit}>
          <h2>Todo App</h2>
          <label htmlFor="todo">Add todo: </label>
          <input
            name="todo"
            type="text"
            placeholder="Create a new todo"
            value={inputValue}
            required
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
      )}
      {
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
      }

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
              <button onClick={() => handleEditClick(item)}>Edit</button>
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
