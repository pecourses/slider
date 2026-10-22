import { SlSizeFullscreen, SlSizeActual } from "react-icons/sl";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import slides from "./assets/data.js";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isFSBtnVisible, setIsFSBtnVisible] = useState(false);

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

  const handleMouseEnter = () => {
    setIsFSBtnVisible(true);
  };
  const handleMouseLeave = () => {
    setIsFSBtnVisible(false);
  };
  const toggleFullscreen = () => {
    setIsFullScreen(prevIsFullScreen => !prevIsFullScreen);
  };

  const { src, title, description } = slides[currentIndex];
  return (
    <>
      <div>
        <figure>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={
              isFullScreen ? styles.imgContainerFullscreen : styles.imgContainer
            }
          >
            <img className={styles.slideImg} src={src} alt="foto" />
            {isFSBtnVisible && (
              <button
                onClick={toggleFullscreen}
                className={styles.fullscreenBtn}
              >
                {!isFullScreen ? <SlSizeFullscreen /> : <SlSizeActual />}
              </button>
            )}
          </div>
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
