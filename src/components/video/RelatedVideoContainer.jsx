import React, { useEffect, useState } from "react";
import UserImage from "../UserImage";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Libography } from "../../libs";
import {
  PlayWrapper,
  StyledVideo,
} from "../../styles/components/Video.styled.js";

const RelatedVideoContainer = ({ isLoading, video }) => {
  const navigate = useNavigate();
  const sd = "700px";
  function goToUser(e) {
    e.stopPropagation();

    navigate(`/${video.username}`);
  }
  function playVideo(e) {
    e.stopPropagation();

    navigate(`/video/${video.playId}`);
  }

  return (
    <PlayWrapper>
      <div className="flex max-[800px]:flex-co gap-2 rounded-md p-0 relative w-full">
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            width={"8rem"}
            height={"8rem"}
            // width={sd ? "8rem" : "24rem"}
            // height={sd ? "8rem" : `14rem`}
          />
        ) : (
          <StyledVideo src={video.video} name={video.desc} autoFocus />
        )}
        <div className="flex flex-col text-justify">
          <Libography
            variant="text"
            loadingHeight={`50px`}
            loadingWidth={`100%`}
            fontSofia
            className="text-base mt-1 flex cursor-pointer max-[700px]:text-sm showHide"
            fontSemiBold
            text={video.desc}
            isLoading={isLoading}
            onClick={playVideo}
          />
          <div className="flex gap-2 p-0 cursor-pointer" onClick={playVideo}>
            <UserImage
              user={video}
              video
              isLoading={isLoading}
              className="max-[700p]:hidden"
            />
            <div className="flex flex-col gap-0">
              <Libography
                isLoading={isLoading}
                variant="text"
                loadingHeight="25px"
                loadingWidth={`120px`}
                className="text-base"
                fontSofia
                fontSemiBold
                text={video.name}
                onClick={goToUser}
              />
            </div>
          </div>
        </div>
      </div>
      <Libography
        variant="text"
        loadingHeight={`50px`}
        loadingWidth={`100%`}
        fontSofia
        className="text-base hidelibo cursor-pointer max-[700px]:text-sm p-2"
        fontSemiBold
        text={video.desc}
        isLoading={isLoading}
        onClick={playVideo}
      />
    </PlayWrapper>
  );
};

export default RelatedVideoContainer;
