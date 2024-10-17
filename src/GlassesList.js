import React from "react";
import Glasses from "./Glasses";

function GlassesList({ arrayGlasses, onClickGlasses, currentGlasses }) {
  return (
    <div className="section">
      <h2>Glasses</h2>
      {arrayGlasses.map((item) => (
        <Glasses
          key={item.id}
          glassesUrl={item.glassesUrl}
          handleChangeGlasses={onClickGlasses}
          currentGlasses={currentGlasses}
        />
      ))}
    </div>
  );
}

export default GlassesList;
