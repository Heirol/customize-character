import React from "react";

function Body({ bodyUrl, onClickBody, currentBody }) {
  const isSelected = bodyUrl === currentBody;
  return (
    <img
      onClick={() => {
        onClickBody(bodyUrl);
      }}
      src={bodyUrl}
      alt=""
      className={isSelected ? "selected" : "none"}
    />
  );
}

export default Body;
