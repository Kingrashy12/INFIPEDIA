import React, { useEffect, useRef } from "react";
import {
  StyledVideoContentDetails,
  UserVideoContent,
  UserVideoContentVideo,
} from "../../styles/components/video/users/styled.uservideo";
import { CustomVideo, Libography, PostImage } from "../../libs";
import { Rashy } from "../../asset";

const UserVideoItem = ({ video }) => {
  return (
    <UserVideoContent className="shadow shadow-black">
      <UserVideoContentVideo
        src={video?.video?.url}
        controls
        className="w-full"
        // poster={Rashy}
      />

      <StyledVideoContentDetails>
        <div className="flex gap-2 items-center">
          <PostImage user={video} />
          <Libography fontSofia text={video?.name} />
        </div>
        <Libography fontSofia text={video?.desc} />
      </StyledVideoContentDetails>
      {/* <CustomVideo src={video?.video?.url} /> */}
    </UserVideoContent>
  );
};

export default UserVideoItem;
