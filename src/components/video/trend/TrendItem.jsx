import React, { useEffect, useRef, useState } from "react";
import {
  StyledVtrendContainer,
  StyledVtrendDetails,
  StyledVtrendUserImg,
} from "../../../styles/components/trend/styledtrend";
import { Button, CustomVideo, Libography } from "../../../libs";
import { PlaceholderImage } from "../../../asset";
import { MdVerified } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa";

const TrendItem = ({ video }) => {
  return (
    <StyledVtrendContainer>
      <CustomVideo video={video} className="video" />
      <StyledVtrendDetails>
        <div className="flex gap-2 items-center">
          <StyledVtrendUserImg
            src={video?.userProfile?.url || PlaceholderImage}
          />
          <Libography
            text={video?.name}
            fontSofia
            className="text-[18px] hover:underline"
          />
          {video?.verified && <MdVerified size={20} color="#f95f35" />}
        </div>
        <Libography fontPoppins text={video?.desc} fontMedium />
      </StyledVtrendDetails>
    </StyledVtrendContainer>
  );
};

export default TrendItem;
