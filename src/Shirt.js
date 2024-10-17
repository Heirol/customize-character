import React from "react";

function Shirt({ shirtUrl, handleChangeShirt, currentShirt }) {
  let isSelected = currentShirt === shirtUrl;
  return (
    <img
      src={shirtUrl}
      onClick={() => handleChangeShirt(shirtUrl)}
      className={isSelected ? "selected" : "none"}
      alt=""
    />
  );
}

export default Shirt;
