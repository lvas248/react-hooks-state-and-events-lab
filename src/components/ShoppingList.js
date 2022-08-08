import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectCategory, setSelectCategory] = useState("All")
  // const [array, setArray] = useState(items)

  function handleChange(event){
    setSelectCategory(event.target.value)
  }

  const array = selectCategory === "All" ? items  : items.filter(item => item.category === selectCategory)
  

  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {array.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
