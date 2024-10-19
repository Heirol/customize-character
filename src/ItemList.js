import React from "react";
import Item from "./Item";

function ItemList({ itemArray, clickChangeItem, currentUrl }) {
  let tit = itemArray[0].title;
  let titleHEHE = "";
  //   if (tit === "facial_hair") {
  //     titleHEHE = "Facial Hair";
  //   } else if (tit === "mouths") {
  //     titleHEHE = "Mouths";
  //   } else if (tit === "shirt") {
  //     titleHEHE = "Shirts";
  //   } else if (tit === "hair") {
  //     titleHEHE = "Hairs";
  //   } else if (tit === "eyes") {
  //     titleHEHE = "Eyes";
  //   }

  switch (tit) {
    case "mouths":
      titleHEHE = "Mouths";
      break;
    case "shirt":
      titleHEHE = "Shirts";
      break;
    case "hair":
      titleHEHE = "Hairs";
      break;
    case "eyes":
      titleHEHE = "Eyes";
      break;
    case "eyebrows":
      titleHEHE = "Eyebrows";
      break;
    default:
      titleHEHE = "Facial Hair";
  }

  return (
    <div className="section">
      <h2>{titleHEHE}</h2>
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
