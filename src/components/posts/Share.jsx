import React from "react";
import {
  StyledShare,
  StyledShareCircle,
} from "../../styles/components/post/share.styled";
import { useShareModal } from "../../hooks";
import ShareModal from "../models/ShareModal";
import { FaSlideshare } from "react-icons/fa";
import { TbMessageShare } from "react-icons/tb";

const Share = () => {
  const sharemodal = useShareModal();
  return (
    <StyledShare>
      {/* <ShareModal /> */}
      <StyledShareCircle
        className="bg shadow shadow-slate-600 rounded-full"
        onClick={sharemodal.onOpen}
      >
        <TbMessageShare size={28} />
      </StyledShareCircle>
    </StyledShare>
  );
};

export default Share;
