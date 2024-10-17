import React from "react";
import Eye from "./Eye";

function EyeList({ eyeArray, onClickEye, currentEye }) {
  return (
    <div className="section">
      <h2>Eyes</h2>
      {eyeArray.map((item) => (
        <Eye
          key={item.id}
          eyeUrl={item.eyeUrl}
          handleChangeEye={onClickEye}
          currentEye={currentEye}
        />
      ))}
    </div>
  );
}

export default EyeList;
