import React from "react";

function Hair({ hairUrl, currentHair, handleHairChange }) {
  const isSelected = hairUrl === currentHair;
  return (
    <img
      onClick={() => {
        handleHairChange(hairUrl);
      }}
      src={hairUrl}
      alt=""
      className={isSelected ? "selected" : "none"}
    />
  );
}

export default Hair;
