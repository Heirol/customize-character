import React, { useState } from "react";
import "./App.css";
import BodyList from "./BodyList";
import HairList from "./HairList";
import Avatar from "./Avatar";
import EyeList from "./EyeList";
import EyebrowList from "./EyebrowList";
import GlassesList from "./GlassesList";
import ItemList from "./ItemList";

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

  // Create GlassesArray
  const countGlasses = 17;
  let multiGlasses = [];
  for (let i = 1; i <= countGlasses; i++) {
    let item = { id: i, glassesUrl: `/images/accessories/glasses/${i}.png` };
    multiGlasses.push(item);
  }
  // Create ItemArray
  let items = [
    { name: "facial_hair", num: 17 },
    { name: "mouths", num: 24 },
    { name: "shirt", num: 5 },
  ];

  // Function Create Array
  function createItemArray(name, num) {
    let itemArray = [];
    for (let i = 1; i <= num; i++) {
      let item = { id: i, itemUrl: `/images/${name}/${i}.png` };
      itemArray.push(item);
    }
    return itemArray;
  }
  let facialHairArray = createItemArray(items[0].name, items[0].num);
  let mouthsArray = createItemArray(items[1].name, items[1].num);
  let shirtArray = createItemArray(items[2].name, items[2].num);

  // Function get H2
  function getTitle(name) {
    let titleH2 = "";
    if (name === "facial_hair") {
      titleH2 = "Facial Hair";
    } else if (name === "mouths") {
      titleH2 = "Mouths";
    } else {
      titleH2 = "Shirt";
    }
    return titleH2;
  }
  let facialHairTitle = getTitle(items[0].name);
  let mouthsTitle = getTitle(items[1].name);
  let shirtTitle = getTitle(items[2].name);

  // USESTATE FOR AVATAR
  const [body, setBody] = useState("/images/body/1.png");
  const [hair, setHair] = useState("/images/hair/1.png");
  const [eye, setEye] = useState("/images/eyes/1.png");
  const [eyebrow, setEyebrow] = useState("/images/eyebrows/1.png");

  const [glasses, setGlasses] = useState("/images/accessories/glasses/1.png");
  const [facialHair, setFacialHair] = useState(
    `/images/${items[0].name}/1.png`
  );
  const [mouths, setMouths] = useState(`/images/${items[1].name}/1.png`);
  const [shirt, setShirt] = useState(`/images/${items[2].name}/1.png`);

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
  const handleClickGlasses = (glassesUrl) => {
    setGlasses(glassesUrl);
  };
  const handleClickItem = (itemUrl) => {
    if (itemUrl.includes("facial_hair")) {
      setFacialHair(itemUrl);
    }
    if (itemUrl.includes("mouths")) {
      setMouths(itemUrl);
    }
    if (itemUrl.includes("shirt")) {
      setShirt(itemUrl);
    }
  };

  //RANDOMIZE
  const handleRandom = () => {
    setBody(`/images/body/${Math.floor(Math.random() * bodyCount) + 1}.png`);
    setHair(`/images/hair/${Math.floor(Math.random() * hairCount) + 1}.png`);
    setEye(`/images/eyes/${Math.floor(Math.random() * eyeCount) + 1}.png`);
    setEyebrow(
      `/images/eyebrows/${Math.floor(Math.random() * eyebrowCount) + 1}.png`
    );
    setGlasses(
      `/images/accessories/glasses/${
        Math.floor(Math.random() * countGlasses) + 1
      }.png`
    );

    setFacialHair(
      `/images/${items[0].name}/${
        Math.floor(Math.random() * items[0].num) + 1
      }.png`
    );
    setMouths(
      `/images/${items[1].name}/${
        Math.floor(Math.random() * items[1].num) + 1
      }.png`
    );
    setShirt(
      `/images/${items[2].name}/${
        Math.floor(Math.random() * items[2].num) + 1
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
        facialHair={facialHair}
        mouthsUrl={mouths}
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
      <GlassesList
        arrayGlasses={multiGlasses}
        onClickGlasses={handleClickGlasses}
        currentGlasses={glasses}
      />
      <ItemList
        itemArray={shirtArray}
        title={shirtTitle}
        clickChangeItem={handleClickItem}
        currentUrl={shirt}
      />
      <ItemList
        itemArray={facialHairArray}
        title={facialHairTitle}
        clickChangeItem={handleClickItem}
        currentUrl={facialHair}
      />
      <ItemList
        itemArray={mouthsArray}
        title={mouthsTitle}
        clickChangeItem={handleClickItem}
        currentUrl={mouths}
      />
    </div>
  );
}

export default App;
