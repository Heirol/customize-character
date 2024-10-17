import React from "react";
import Body from "./Body";

function BodyList({ bodyArray, handleBodyChange1, currentBody }) {
  return (
    <div className="section">
      <h2>Body</h2>
      {bodyArray.map((item) => (
        <Body
          key={item.id}
          bodyUrl={item.bodyUrl}
          onClickBody={handleBodyChange1}
          currentBody={currentBody}
        />
      ))}
    </div>
  );
}

export default BodyList;
