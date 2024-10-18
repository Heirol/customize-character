import React from "react";
import Item from "./Item";

function ItemList({ itemArray, title, clickChangeItem, currentUrl }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      {itemArray.map((item) => (
        <Item
          key={item.id}
          itemUrl={item.itemUrl}
          handleChangeItem={clickChangeItem}
          currentUrl={currentUrl}
        />
      ))}
    </div>
  );
}

export default ItemList;
