import React, { useState } from "react";
import "./App.css";
import BodyList from "./BodyList";
import Avatar from "./Avatar";
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
  // Create GlassesArray
  const countGlasses = 17;
  let multiGlasses = [];
  for (let i = 1; i <= countGlasses; i++) {
    let item = { id: i, glassesUrl: `/images/accessories/glasses/${i}.png` };
    multiGlasses.push(item);
  }
  // List ItemArray
  let items = [
    { name: "facial_hair", num: 17 },
    { name: "mouths", num: 24 },
    { name: "shirt", num: 5 },
    { name: "hair", num: 73 },
    { name: "eyes", num: 24 },
    { name: "eyebrows", num: 15 },
  ];

  // Function Create Array
  function createItemArray(name, num) {
    let itemArray = [];
    for (let i = 1; i <= num; i++) {
      let item = { id: i, itemUrl: `/images/${name}/${i}.png`, title: name };
      itemArray.push(item);
    }
    return itemArray;
  }
  let facialHairArray = createItemArray(items[0].name, items[0].num);
  let mouthsArray = createItemArray(items[1].name, items[1].num);
  let shirtArray = createItemArray(items[2].name, items[2].num);
  let hairArray = createItemArray(items[3].name, items[3].num);
  let eyesArray = createItemArray(items[4].name, items[4].num);
  let eyeBrowsArray = createItemArray(items[5].name, items[5].num);

  // USESTATE FOR AVATAR
  const [body, setBody] = useState("/images/body/1.png");
  const [glasses, setGlasses] = useState("/images/accessories/glasses/1.png");
  const [eyebrow, setEyebrow] = useState(`/images/${items[5].name}/1.png`);
  const [eye, setEye] = useState(`/images/${items[4].name}/1.png`);
  const [hair, setHair] = useState(`/images/${items[3].name}/1.png`);
  const [facialHair, setFacialHair] = useState(`/images/${items[0].name}/1.png`);
  const [mouths, setMouths] = useState(`/images/${items[1].name}/1.png`);
  const [shirt, setShirt] = useState(`/images/${items[2].name}/1.png`);

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

  //RANDOMIZE
  const handleRandom = () => {
    setBody(`/images/body/${Math.floor(Math.random() * bodyCount) + 1}.png`);
    setGlasses(`/images/accessories/glasses/${Math.floor(Math.random() * countGlasses) + 1}.png`);
    setEyebrow(`/images/eyebrows/${Math.floor(Math.random() * items[5].num) + 1}.png`);
    setEye(`/images/eyes/${Math.floor(Math.random() * items[4].num) + 1}.png`);
    setHair(`/images/hair/${Math.floor(Math.random() * items[3].num) + 1}.png`);
    setFacialHair(`/images/${items[0].name}/${Math.floor(Math.random() * items[0].num) + 1}.png`);
    setMouths(`/images/${items[1].name}/${Math.floor(Math.random() * items[1].num) + 1}.png`);
    setShirt(`/images/${items[2].name}/${Math.floor(Math.random() * items[2].num) + 1}.png`);
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
      <ItemList
        itemArray={facialHairArray}
        clickChangeItem={handleClickItem}
        currentUrl={facialHair}
      />
      <ItemList itemArray={mouthsArray} clickChangeItem={handleClickItem} currentUrl={mouths} />
    </div>
  );
}

export default App;
