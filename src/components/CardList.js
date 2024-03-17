import React from "react";
import Cards from "./Cards";

function CardList({ data, handleDeleteClick, handleEditClick }) {
  return (
    <div className="card-list">
      {data.map((todo, index) => (
        <Cards
          key={todo._id}
          index={index}
          todo={todo.title}
          deleteHandler={() => handleDeleteClick(todo)}
          handledit={() => handleEditClick(todo, index)}
        />
      ))}
    </div>
  );
}

export default CardList;
