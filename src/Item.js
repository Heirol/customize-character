import React from "react";

function Item({ itemUrl, handleChangeItem, currentUrl }) {
  let isSelected = itemUrl === currentUrl;
  return (
    <img
      src={itemUrl}
      onClick={() => handleChangeItem(itemUrl)}
      className={isSelected ? "selected" : "none"}
      alt=""
    />
  );
}

export default Item;
