import { useEffect, useState } from "react";
import "./image-with-shimmer.scss";

interface ImageWithShimmerProps {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const ImageWithShimmer = ({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  style,
  imgStyle,
  objectFit,
}: ImageWithShimmerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div
      className={`shimmer-image-container ${className}`}
      style={{
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
        verticalAlign: "middle",
        ...style,
      }}
    >
      {!isLoaded && (
        <div className="shimmer-placeholder">
          <div className="normal-spinner" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        style={{
          display: "block",
          maxWidth: "100%",
          height: "auto",
          objectFit,
          ...imgStyle,
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageWithShimmer;
