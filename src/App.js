import React, { useState } from "react";
import { v4 } from "uuid";

import "./App.css";

import AddToDoItem from "./components/AddToDoItem";
import EditToDoItem from "./components/EditToDoItem";
import Pagination from "./components/Pagination";
import SearchToDoItem from "./components/SearchToDoItem";
import ToDoItems from "./components/ToDoItems";

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

  //Trenutna lista
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = todo.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="todoHolder">
      {isEditing ? (
        <EditToDoItem
          currentTodo={currentTodo.title}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddToDoItem
          inputValue={inputValue}
          onAddFormSubmit={formSubmit}
          onAddInputChange={handleInputChange}
        />
      )}
      <SearchToDoItem setFilter={setFilter} />
      <ToDoItems
        todo={currentItems}
        filter={filter}
        onHandleEditClick={handleEditClick}
        onHandleDeleteClick={deleteHandler}
      />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={todo.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
