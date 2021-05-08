import { useState } from "react";
import "./styles.css";

export default function App() {
  const [images, setImages] = useState([]);
  const addImage = async () => {
    const imgdata = await fetch("https://source.unsplash.com/random/200x200");
    console.log(imgdata.url);
    setImages([...images, imgdata.url]);
  };
  return (
    <div className="App">
      <button onClick={addImage}>Add img</button>
      <button onClick={() => setImages([])}>Reset</button>
      <div>
        {images.map((image, index) => {
          return <img key={index} src={image} alt="image" />;
        })}
      </div>
    </div>
  );
}
