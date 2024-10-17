import React from "react";

function EyeBrow({ eyebrowUrl, handleEyebrowChange, currentEyebrow }) {
  let isSelected = currentEyebrow === eyebrowUrl;
  return (
    <img
      src={eyebrowUrl}
      onClick={() => handleEyebrowChange(eyebrowUrl)}
      className={isSelected ? "selected" : "none"}
      alt=""
    />
  );
}

export default EyeBrow;
