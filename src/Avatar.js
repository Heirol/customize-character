import React from "react";

function Avatar({
  bodyUrl,
  hairUrl,
  eyeUrl,
  eyebrowUrl,
  shirtUrl,
  glassesUrl,
  facialHair,
  mouthsUrl,
  handleRandom,
}) {
  return (
    <>
      <div className="section-a">
        <div className="section-avatar">
          <img className="img-body img-avatar" src={bodyUrl} alt="" />
          <img className="img-hair img-avatar" src={hairUrl} alt="" />
          <img className="img-eye img-avatar" src={eyeUrl} alt="" />
          <img className="img-eyebrow img-avatar" src={eyebrowUrl} alt="" />
          <img className="img-shirt img-avatar" src={shirtUrl} alt="" />
          <img className="img-glasses img-avatar" src={glassesUrl} alt="" />
          <img className="img-facialHair img-avatar" src={facialHair} alt="" />
          <img className="img-mouths img-avatar" src={mouthsUrl} alt="" />
        </div>
        <button onClick={handleRandom}>Random</button>
      </div>
    </>
  );
}

export default Avatar;
