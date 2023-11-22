import React from "react";
import { LineItem } from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <div className="main">
      <ol type="1">
        {items.map((item) => (
          <LineItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ol>
    </div>
  );
};

export default ItemList;
