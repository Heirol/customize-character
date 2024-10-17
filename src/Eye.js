import React from "react";

function Eye({ eyeUrl, handleChangeEye, currentEye }) {
  const isSelected = eyeUrl === currentEye;
  return (
    <img
      src={eyeUrl}
      onClick={() => handleChangeEye(eyeUrl)}
      className={isSelected ? "selected" : "none"}
      alt=""
    />
  );
}

export default Eye;
