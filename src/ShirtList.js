import React from "react";
import Shirt from "./Shirt";

function ShirtList({ arrayShirt, onClickShirt, currentShirt }) {
  return (
    <div className="section">
      <h2>Shirt</h2>
      {arrayShirt.map((item) => (
        <Shirt
          key={item.id}
          shirtUrl={item.shirtUrl}
          handleChangeShirt={onClickShirt}
          currentShirt={currentShirt}
        />
      ))}
    </div>
  );
}

export default ShirtList;
