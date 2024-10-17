import React from "react";
import Hair from "./Hair";

function HairList({ hairArray, currentHair, handleHairChange }) {
  return (
    <div className="section">
      <h2>Hairs</h2>
      {hairArray.map((item) => (
        <Hair
          key={item.id}
          hairUrl={item.imageUrl}
          currentHair={currentHair}
          handleHairChange={handleHairChange}
        />
      ))}
    </div>
  );
}

export default HairList;
