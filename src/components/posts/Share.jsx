import React from "react";
import {
  StyledLoginCircle,
  StyledShare,
  StyledShareCircle,
} from "../../styles/components/post/share.styled";
import { useShareModal } from "../../hooks";
import ShareModal from "../models/ShareModal";
import { FaSlideshare } from "react-icons/fa";
import { TbMessageShare } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogin } from "react-icons/hi";

const Share = () => {
  const sharemodal = useShareModal();
  const user = useSelector((state) => state.credentails);
  const navigate = useNavigate();
  return (
    <StyledShare>
      {/* <ShareModal /> */}
      {user?._id ? (
        <StyledShareCircle
          className="bg shadow shadow-slate-600 rounded-full"
          onClick={sharemodal.onOpen}
        >
          <TbMessageShare size={28} />
        </StyledShareCircle>
      ) : (
        <StyledLoginCircle
          className="bg-black shadow-md shadow-slate-600 rounded-full"
          onClick={() => navigate("/auth/login")}
        >
          <HiOutlineLogin size={28} />
        </StyledLoginCircle>
      )}
    </StyledShare>
  );
};

export default Share;
