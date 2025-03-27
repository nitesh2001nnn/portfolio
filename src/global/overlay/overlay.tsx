import React, { useEffect, useState } from "react";
import "./overlay.scss";
import { Positions } from "../constants/helpers";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createPortal } from "react-dom";
interface OverlayProps {
  refElement: React.RefObject<HTMLDivElement>;
  overlyClick: () => void;
  children: React.ReactNode;
  overlayClass?: string;
  position?: Positions;
  layer?: number;
}

const OverlayElement = ({
  refElement,
  overlyClick,
  children,
  position,
  overlayClass = "",
  layer = 0,
}: OverlayProps) => {
  const [childPosition, setChildPosition] = useState<{
    top: "auto";
    bottom: "auto";
    left: "auto";
    right: "auto";
    transform: "";
  }>({
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto",
    transform: "",
  });

  const updatePosition = () => {
    if (refElement.current) {
      const anchorDimensions = refElement.current.getBoundingClientRect();
      let updatePosition: any = {};

      switch (position) {
        case Positions.bottom:
          updatePosition = {
            top: anchorDimensions?.bottom,
            left: anchorDimensions.left + anchorDimensions.width / 2,
            transform: "TranslateX(-50%)",
          };
          break;
        case Positions.bottomEnd:
          updatePosition = {
            top: anchorDimensions?.bottom,
            left: anchorDimensions?.right,
            transform: "TranslateX(-100%)",
          };
          break;
        case Positions.bottomStart:
          updatePosition = {
            top: anchorDimensions?.bottom,
            left: anchorDimensions?.left,
            // transform:"TranslateX(-50%)"
          };
          break;
        default:
          break;
      }
      setChildPosition((prev) => {
        return {
          ...prev,
          ...updatePosition,
        };
      });

      console.log("anchodrDImension", anchorDimensions);
    }
  };

  useEffect(() => {
    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  useEffect(() => {
    console.log("childposition", childPosition);
  }, [childPosition]);

  return (
    <>
      {createPortal(
        <>
          <div className="overlay-container" onClick={overlyClick}>
            <div className="child" style={{ ...childPosition, zIndex: 1000 }}>
              {children}
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
};

export default OverlayElement;
