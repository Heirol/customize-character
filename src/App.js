import React, { useState } from "react";
import "./App.css";
import BodyList from "./BodyList";
import Avatar from "./Avatar";
import GlassesList from "./GlassesList";
import ItemList from "./ItemList";

function App() {
  // CREATE BODY ARRAY
  const bodyCount = 17;
  let bodyArray = [];
  for (let i = 1; i <= bodyCount; i++) {
    let item = { id: i, bodyUrl: `/images/body/${i}.png` };
    bodyArray.push(item);
  }
  // CREATE GLASSES
  const countGlasses = 17;
  let multiGlasses = [];
  for (let i = 1; i <= countGlasses; i++) {
    let item = { id: i, glassesUrl: `/images/accessories/glasses/${i}.png` };
    multiGlasses.push(item);
  }
  // LIST ITEM ARRAY
  let items = [
    { name: "facial_hair", num: 17 },
    { name: "mouths", num: 24 },
    { name: "shirt", num: 5 },
    { name: "hair", num: 73 },
    { name: "eyes", num: 24 },
    { name: "eyebrows", num: 15 },
  ];

  // FUNCTION CREATE ARRAY
  function createItemArray(name, num) {
    let itemArray = [];
    for (let i = 1; i <= num; i++) {
      let item = { id: i, itemUrl: `/images/${name}/${i}.png`, title: name };
      itemArray.push(item);
    }
    return itemArray;
  }
  let facialHArr = createItemArray(items[0].name, items[0].num);
  let mouthsArray = createItemArray(items[1].name, items[1].num);
  let shirtArray = createItemArray(items[2].name, items[2].num);
  let hairArray = createItemArray(items[3].name, items[3].num);
  let eyesArray = createItemArray(items[4].name, items[4].num);
  let eyeBrowsArray = createItemArray(items[5].name, items[5].num);

  // USESTATE FOR AVATAR
  const [body, setBody] = useState("/images/body/1.png");
  const [glasses, setGlasses] = useState("/images/accessories/glasses/1.png");
  const [eyebrow, setEyebrow] = useState(`/images/eyebrows/1.png`);
  const [eye, setEye] = useState(`/images/eyes/1.png`);
  const [hair, setHair] = useState(`/images/hair/1.png`);
  const [facialHair, setFacialHair] = useState(`/images/facial_hair/1.png`);
  const [mouths, setMouths] = useState(`/images/mouths/1.png`);
  const [shirt, setShirt] = useState(`/images/shirt/1.png`);

  // HANDLE EVENT ONCLICK
  const handleBodyChange = (imageUrl) => {
    setBody(imageUrl);
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
    if (itemUrl.includes("hair")) {
      setHair(itemUrl);
    }
    if (itemUrl.includes("eyes")) {
      setEye(itemUrl);
    }
    if (itemUrl.includes("eyebrows")) {
      setEyebrow(itemUrl);
    }
  };

  // HANDLE RANDOM
  const randomFn = (num) => {
    return Math.floor(Math.random() * num) + 1;
  };
  const handleRandom = () => {
    setBody(`/images/body/${randomFn(bodyCount)}.png`);
    setGlasses(`/images/accessories/glasses/${randomFn(countGlasses)}.png`);
    setEyebrow(`/images/eyebrows/${randomFn(items[5].num)}.png`);
    setEye(`/images/eyes/${randomFn(items[4].num)}.png`);
    setHair(`/images/hair/${randomFn(items[3].num)}.png`);
    setFacialHair(`/images/facial_hair/${randomFn(items[0].num)}.png`);
    setMouths(`/images/mouths/${randomFn(items[1].num)}.png`);
    setShirt(`/images/shirt/${randomFn(items[2].num)}.png`);
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
        facialHairUrl={facialHair}
        mouthsUrl={mouths}
        handleRandom={handleRandom}
      />
      <BodyList bodyArray={bodyArray} handleBodyChange1={handleBodyChange} currentBody={body} />
      <GlassesList
        arrayGlasses={multiGlasses}
        onClickGlasses={handleClickGlasses}
        currentGlasses={glasses}
      />
      <ItemList itemArray={eyeBrowsArray} clickChangeItem={handleClickItem} currentUrl={eyebrow} />
      <ItemList itemArray={eyesArray} clickChangeItem={handleClickItem} currentUrl={eye} />
      <ItemList itemArray={hairArray} clickChangeItem={handleClickItem} currentUrl={hair} />
      <ItemList itemArray={shirtArray} clickChangeItem={handleClickItem} currentUrl={shirt} />
      <ItemList itemArray={facialHArr} clickChangeItem={handleClickItem} currentUrl={facialHair} />
      <ItemList itemArray={mouthsArray} clickChangeItem={handleClickItem} currentUrl={mouths} />
    </div>
  );
}

export default App;
