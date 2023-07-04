import React from "react";
import { useShareModal } from "../../hooks";
import { BackDrop } from "../../libs";
import ShareForm from "../form/ShareForm";

const ShareModal = () => {
  const sharemodal = useShareModal();
  return (
    <div>{sharemodal.isOpen && <BackDrop children={<ShareForm />} />}</div>
  );
};

export default ShareModal;
