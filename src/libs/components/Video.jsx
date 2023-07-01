import React, { useEffect, useRef } from "react";
import { StyledVideoItemVid } from "../../styles/components/video/videoitem.styled";

const Video = ({
  video,
  className,
  name,
  poster,
  autoStart,
  height,
  width,
}) => {
  return (
    <StyledVideoItemVid
      src={video}
      controls
      height={height}
      width={width}
      className={` ${className}`}
      title={name}
      poster={poster}
      autoPlay={autoStart}
    />
  );
};

export default Video;
