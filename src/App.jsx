import { useState, useEffect } from "react";
import "./App.module.css";
import slides from "./assets/data.js";
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

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

  const changePlay = () => {
    setIsPlay(prevIsPlay => !prevIsPlay);
  };

  useEffect(() => {
    let timerId = null;
    if (isPlay) {
      timerId = setInterval(next, 500);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isPlay]);

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
        <button onClick={changePlay}>{isPlay ? "stop" : "start"}</button>
      </div>
    </>
  );
}

export default App;
