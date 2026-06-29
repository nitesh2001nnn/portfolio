import { useEffect, useRef, useState } from "react";
import "./fs-carousel.scss";

type carouselObject = {
  id: number;
  label: string;
  value: string;
  src: string;
};

interface carouselData {
  data: carouselObject[];
}

const Fullscreencarousel = ({ data }: carouselData) => {
  useEffect(() => {
    console.log("data in carousel component", data);
  }, [data]);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const handleIncreament = () => {
    setActiveIndex((prev: any) => (prev + 1) % data.length);
  };
  const handleDecreament = () => {
    setActiveIndex((prev: any) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const container = containerRef.current;

    const currentSlide = container?.children[activeIndex] as HTMLElement;
    const childContainer = childRef?.current;
    const childCurrentSlide = childContainer?.children[
      activeIndex
    ] as HTMLElement;
    if (container && currentSlide) {
      const offset = currentSlide.offsetLeft;
      container.style.transform = `translateX(-${offset}px)`;
    }
    if (childContainer && childCurrentSlide) {
      const offset = childCurrentSlide.offsetLeft;
      childContainer.style.transform = `translateX(-${offset}px)`;
    }
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleIncreament();
    }, 2000);
    return () => clearInterval(interval);
  }, [data.length]);

  useEffect(() => {
    console.log("active index", activeIndex);
  }, [activeIndex]);
  return (
    <div className="outer-container">
      <button onClick={handleDecreament} className="left-btn">
        <img src="./assets/icons/left-arrow.png"></img>
      </button>
      <div className="inner-div-container" ref={containerRef}>
        {data &&
          data.map((item: any, index: any) => {
            return (
              <div className="inner-container" key={index}>
                <img src={item.src}></img>
              </div>
            );
          })}
      </div>
      <div className="small-pixels-image">
        <div className="small-pixels-div-1" ref={childRef}>
          {data &&
            data.map((item: any, index: any) => {
              return (
                <div
                  className={`small-pixels-div ${
                    activeIndex == index ? "active" : ""
                  }`}
                  key={index}
                >
                  <img src={item.src}></img>
                </div>
              );
            })}
        </div>
      </div>
      <button onClick={handleIncreament} className="right-btn">
        <img src="./assets/icons/right-arrow.png"></img>
      </button>
    </div>
  );
};

export default Fullscreencarousel;
