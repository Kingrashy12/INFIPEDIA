import React, { useEffect, useState } from "react";
import {
  ConversationStyledItem,
  OfflineDot,
  OnlineDot,
} from "../../styles/components/chats/conversation.styled";
import { ChatImage } from "../../styles/components/chats/ImageUser.styled";
import { HeaderTwo, Libography, Span } from "../../libs";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../hooks/getUserById";

const ConversationItem = ({
  chat,
  currentUserId,
  setCurrentChat,
  isOnline,
}) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userId = chat.members.find((id) => id !== currentUserId);
    console.log("userId:", userId);
    const getUserData = async () => {
      const data = await getUserById(userId);
      setUserData(data);
    };
    getUserData();
  }, []);
  const online = (
    <div className="flex gap-1 items-center">
      {/* {isOnline ? (
        <OnlineDot title={`${userData?.name} is online`} />
      ) : (
        <OfflineDot title={`${userData?.name} is offline`} />
      )} */}
    </div>
  );

  return (
    <ConversationStyledItem
      className="hover:bg-slate-200 p-[3px] rounded-md"
      onClick={() => setCurrentChat(chat)}
    >
      <ChatImage src={userData?.userProfile?.url} />
      <div className="flex flex-col text-justify">
        <HeaderTwo
          fontSemiBold
          fontSofia
          text={userData?.name}
          className="text-[18px] hover:underline"
        />
        <Libography fontSemiBold text={online} />
      </div>{" "}
    </ConversationStyledItem>
  );
};

export default ConversationItem;
