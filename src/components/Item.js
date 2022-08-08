import React, { useState } from "react";

function Item({ name, category }) {
  const [isIn, setIsIn] = useState(false)
  const inOrAdd = isIn ? "Remove From Cart" : "Add To Cart"
  const inClass = isIn? "in-cart" : ""

  function handleClick(){
    setIsIn(!isIn)
  }
  return (
    <li className={inClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{inOrAdd}</button>
    </li>
  );
}

export default Item;
