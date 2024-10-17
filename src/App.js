import React, { useState } from "react";
import "./App.css";
import BodyList from "./BodyList";
import HairList from "./HairList";
import Avatar from "./Avatar";
import EyeList from "./EyeList";
import EyebrowList from "./EyebrowList";
import ShirtList from "./ShirtList";
import GlassesList from "./GlassesList";

function App() {
  // Create BodyArray
  const bodyCount = 17;
  let bodyArray = [];
  for (let i = 1; i <= bodyCount; i++) {
    let item = { id: i, bodyUrl: `/images/body/${i}.png` };
    bodyArray.push(item);
  }

  // Create HairArray
  const hairCount = 73;
  let hairArray = [];
  for (let i = 1; i <= hairCount; i++) {
    let hairItem = { id: i, imageUrl: `/images/hair/${i}.png` };
    hairArray.push(hairItem);
  }

  // Create EyeArray
  const eyeCount = 24;
  let eyes = [];
  for (let i = 1; i <= eyeCount; i++) {
    let eyeItem = { id: i, eyeUrl: `/images/eyes/${i}.png` };
    eyes.push(eyeItem);
  }
  // Create EyebrowsArray
  const eyebrowCount = 15;
  let eyebrows = [];
  for (let i = 1; i <= eyebrowCount; i++) {
    let item = { id: i, eyebrowUrl: `/images/eyebrows/${i}.png` };
    eyebrows.push(item);
  }

  // Create ShirtArray
  const shirtCount = 5;
  let shirts = [];
  for (let i = 1; i <= shirtCount; i++) {
    let item = { id: i, shirtUrl: `/images/clothes/layer_1/${i}.png` };
    shirts.push(item);
  }
  // Create GlassesArray
  const countGlasses = 17;
  let multiGlasses = [];
  for (let i = 1; i <= countGlasses; i++) {
    let item = { id: i, glassesUrl: `/images/accessories/glasses/${i}.png` };
    multiGlasses.push(item);
  }
  console.log(multiGlasses);

  // USESTATE FOR AVATAR
  const [body, setBody] = useState("/images/body/1.png");
  const [hair, setHair] = useState("/images/hair/1.png");
  const [eye, setEye] = useState("/images/eyes/1.png");
  const [eyebrow, setEyebrow] = useState("/images/eyebrows/1.png");
  const [shirt, setShirt] = useState("/images/clothes/layer_1/1.png");
  const [glasses, setGlasses] = useState("/images/accessories/glasses/1.png");

  // HANDLE EVENT ONCLICK
  const handleBodyChange = (imageUrl) => {
    setBody(imageUrl);
  };
  const handleHairChange = (hairUrl) => {
    setHair(hairUrl);
  };
  const handleClickEye = (eyeUrl) => {
    setEye(eyeUrl);
  };
  const handleClickEyebrow = (eyebrowUrl) => {
    setEyebrow(eyebrowUrl);
  };
  const handleClickShirt = (shirtUrl) => {
    setShirt(shirtUrl);
  };
  const handleClickGlasses = (glassesUrl) => {
    setGlasses(glassesUrl);
  };

  //RANDOMIZE
  const handleRandom = () => {
    // let randomNum = Math.floor(Math.random() * 10) + 1
    setBody(`/images/body/${Math.floor(Math.random() * bodyCount) + 1}.png`);
    setHair(`/images/hair/${Math.floor(Math.random() * hairCount) + 1}.png`);
    setEye(`/images/eyes/${Math.floor(Math.random() * eyeCount) + 1}.png`);
    setEyebrow(
      `/images/eyebrows/${Math.floor(Math.random() * eyebrowCount) + 1}.png`
    );
    setShirt(
      `/images/clothes/layer_1/${
        Math.floor(Math.random() * shirtCount) + 1
      }.png`
    );
    setGlasses(
      `/images/accessories/glasses/${
        Math.floor(Math.random() * countGlasses) + 1
      }.png`
    );
  };

  return (
    <div className="big-container">
      <h2>Hieuvo project Customize character</h2>
      <Avatar
        bodyUrl={body}
        hairUrl={hair}
        eyeUrl={eye}
        eyebrowUrl={eyebrow}
        shirtUrl={shirt}
        glassesUrl={glasses}
        handleRandom={handleRandom}
      />
      <BodyList
        bodyArray={bodyArray}
        handleBodyChange1={handleBodyChange}
        currentBody={body}
      />
      <HairList
        hairArray={hairArray}
        handleHairChange={handleHairChange}
        currentHair={hair}
      />
      <EyeList eyeArray={eyes} onClickEye={handleClickEye} currentEye={eye} />
      <EyebrowList
        eyebrowArray={eyebrows}
        onClickEyebrow={handleClickEyebrow}
        currentEyebrow={eyebrow}
      />
      <ShirtList
        arrayShirt={shirts}
        onClickShirt={handleClickShirt}
        currentShirt={shirt}
      />
      <GlassesList
        arrayGlasses={multiGlasses}
        onClickGlasses={handleClickGlasses}
        currentGlasses={glasses}
      />
    </div>
  );
}

export default App;
