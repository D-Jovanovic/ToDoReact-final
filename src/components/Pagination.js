import React from "react";

import style from "./Pagination.module.css";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={style.pageNumbers}>
      {pageNumbers.map((number) => (
        <li
          onClick={() => paginate(number)}
          key={number}
          className={currentPage == number ? "active" : ""}
        >
          {number}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
