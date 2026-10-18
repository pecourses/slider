import { useState } from "react";
import "./App.module.css";
import slides from "./assets/data.js";
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) {
        return slides.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const next = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === slides.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const { src, title, description } = slides[currentIndex];
  return (
    <>
      <div>
        <figure>
          <img src={src} alt="foto"></img>
          <p>{title}</p>
          <figcaption>{description}</figcaption>
        </figure>
        <button onClick={prev}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
    </>
  );
}

export default App;
