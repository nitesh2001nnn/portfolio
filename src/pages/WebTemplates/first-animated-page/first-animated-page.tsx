/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./first-animated-page.scss";
import { API_CONFIG } from "../../../helpers/api-config";

const FirstAnimatedPage = (props: any) => {
  const [leftSideWidth, setLeftSideWidth] = useState("50%");
  const handleMouseMove = (e: any) => {
    const boundedRegion = e.currentTarget.getBoundingClientRect();
    console.log("bounded region", boundedRegion);
    const mouseX = e.clientX - boundedRegion.left;
    const percent = (mouseX / boundedRegion.width) * 100;
    const clampedRegion = Math.max(0, Math.min(100, percent));
    setLeftSideWidth(`${clampedRegion}%`);
  };

  return (
    <div
      className="animated-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setLeftSideWidth("50%")}
    >
      <div className="animated-container">
        <div
          className="left-side"
          style={{ width: `calc(100% - ${leftSideWidth})` }}
        >
          <div className="inside-left">
            <div className="travel-container">
              <span className="travel-text fancy-text">
                {props.data?.headerData?.[0].title}
              </span>
              <span className=" travel-mid-text text-body-xxs">
                {props.data?.headerData?.[0].description}
              </span>
            </div>
            <div className="img-container-left">
              <img
                src={`${API_CONFIG.BASEURL}${props.data?.headerData?.[0].image.url}`}
              ></img>
            </div>
          </div>
        </div>
        <div className="right-side" style={{ width: leftSideWidth }}>
          <div className="inside-right">
            <div className="img-container-right">
              <img
                src={`${API_CONFIG.BASEURL}${props.data?.headerData?.[1].image.url}`}
              ></img>
            </div>
            <div className="coder-container">
              <span className="fancy-text">
                {props.data?.headerData?.[1].title}
              </span>
              <span className=" code-mid-text text-body-xxs">
                {props.data?.headerData?.[1].description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAnimatedPage;
