import React from "react";

function Avatar({
  bodyUrl,
  hairUrl,
  eyeUrl,
  eyebrowUrl,
  shirtUrl,
  glassesUrl,
  handleRandom,
}) {
  return (
    <>
      <div className="section-a">
        <div className="section-avatar">
          <img className="img-body" src={bodyUrl} alt="" />
          <img className="img-hair" src={hairUrl} alt="" />
          <img className="img-eye" src={eyeUrl} alt="" />
          <img className="img-eyebrow" src={eyebrowUrl} alt="" />
          <img className="img-shirt" src={shirtUrl} alt="" />
          <img className="img-glasses" src={glassesUrl} alt="" />
        </div>
        <button onClick={handleRandom}>Random</button>
      </div>
    </>
  );
}

export default Avatar;
