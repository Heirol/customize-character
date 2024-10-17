import React from "react";
import EyeBrow from "./EyeBrow";

function EyebrowList({ eyebrowArray, onClickEyebrow, currentEyebrow }) {
  return (
    <div className="section">
      <h2>EyeBrows</h2>
      {eyebrowArray.map((item) => (
        <EyeBrow
          key={item.id}
          eyebrowUrl={item.eyebrowUrl}
          handleEyebrowChange={onClickEyebrow}
          currentEyebrow={currentEyebrow}
        />
      ))}
    </div>
  );
}

export default EyebrowList;
