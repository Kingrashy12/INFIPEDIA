import React from "react";
import { Video } from "../../libs";
import { FlexBetween } from "../../styles/common/Global";
import { VideoPlayWrapper } from "../../styles/components/video/videoitem.styled";
import { Skeleton } from "@mui/material";

const PlayVideo = ({ play, isLoading }) => {
  return (
    <VideoPlayWrapper>
      {isLoading ? (
        <Skeleton variant="rectangular" width={`100%`} height={`30rem`} />
      ) : (
        <Video
          video={play?.video?.url}
          className="h-[500px] w-full bg-black rounded-none"
          name={play?.desc}
          // autoStart
        />
      )}

      <FlexBetween className="p-5/ max-[700px]:p-0 max-[700px]:flex-col">
        {/* <HeaderOne
          isLoading={isLoading}
          loadingHeight={`50px`}
          fontBold
          fontSofia
          text={play?.desc}
          className="text-xl max-[700px]:text-sm text-black"
        /> */}
      </FlexBetween>
    </VideoPlayWrapper>
  );
};

export default PlayVideo;
