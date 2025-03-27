import { useEffect, useRef, useState } from "react";
import "./carousel.scss";

const Carousel = ({ data }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${
        activeIndex * (100 / 3)
      }%)`;
    }
  }, [activeIndex]);

  
  return (
    <div className="carousel-wrapper">
      <div className="previous-button" onClick={prevSlide}>
        <img src="/global/icons/chevron-left.svg"></img>
      </div>

      <div className="carousel-container">
        {
          <div className="carousel-slider" ref={carouselRef}>
            {data.map((item: any, index: any) => {
              return (
                <div className="card-container">
                  <div className="img-container">
                    <img src={item.src}></img>
                  </div>
                  <h1>{item.label}</h1>
                  <span>{item.value}</span>
                </div>
              );
            })}
          </div>
        }
        {data.length == 0 && <span>No Data found</span>}
      </div>
      <div className="next-slide-btn" onClick={nextSlide}>
        <img src="/global/icons/chevron-right.svg"></img>
      </div>
      <div className="dot-container">
        {data.map((_, index) => {
          return(
            <div className={`dots ${activeIndex === index ?"active":""}`}></div>

          )

        })}
      </div>
    </div>
  );
};

export default Carousel;
