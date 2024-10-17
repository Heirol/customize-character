import React from "react";

function Glasses({ glassesUrl, handleChangeGlasses, currentGlasses }) {
  let isSelected = glassesUrl === currentGlasses;
  return (
    <img
      src={glassesUrl}
      onClick={() => handleChangeGlasses(glassesUrl)}
      className={isSelected ? "selected" : "none"}
      alt=""
    />
  );
}

export default Glasses;
