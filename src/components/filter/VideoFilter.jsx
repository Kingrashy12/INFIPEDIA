import React, { useState } from "react";
import { StyledUserVideoFilter } from "../../styles/components/video/users/styled.uservideo";
import { HeaderOne, Libography } from "../../libs";
import { MdSettings } from "react-icons/md";

const VideoFilter = ({ userId, authId, currentUser }) => {
  const [open, setOpen] = useState(false);
  const filter = (
    <div className="flex items-center gap-1">
      <MdSettings className="text-[20px]" />
      <Libography text="Manage videos" />
    </div>
  );
  return (
    <StyledUserVideoFilter>
      <HeaderOne
        fontSofia
        text={
          currentUser._id === authId
            ? "Your videos"
            : `${currentUser.username} videos`
        }
      />
      {userId ? (
        <Libography
          fontSemiBold
          fontSofia
          text={filter}
          className="p-2 rounded-[8px] bg-slate-300 cursor-pointer hover:bg-slate-400"
          onClick={() => setOpen(true)}
        />
      ) : (
        ""
      )}
    </StyledUserVideoFilter>
  );
};

export default VideoFilter;
