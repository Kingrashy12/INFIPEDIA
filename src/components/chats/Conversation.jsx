import React, { useState } from "react";
import {
  ConversationConatiner,
  ConversationWrapper,
} from "../../styles/components/chats/conversation.styled";
import { HeaderOne, HeaderTwo } from "../../libs";
import ConversationItem from "./ConversationItem";
import ChatSearch from "../filter/ChatSearch";

const Conversation = ({
  chatId,
  chats,
  currentUser,
  setCurrentChat,
  hide,
  online,
}) => {
  const [text, setText] = useState("");
  return (
    <ConversationWrapper chatId={chatId} hide={hide}>
      <ConversationConatiner>
        <HeaderOne
          fontSemiBold
          fontSofia
          text="Conversations"
          className="text-xl"
        />
        <HeaderTwo
          fontSemiBold
          fontSofia
          text="Chat"
          className="text-xl hidden"
        />
        {/* <ChatSearch text={text} setText={setText} /> */}
        <hr />
        {chats?.map((chat) => (
          <>
            <ConversationItem
              // isOnline={online}
              chat={chat}
              currentUserId={currentUser?._id}
              setCurrentChat={setCurrentChat}
            />
          </>
        ))}
      </ConversationConatiner>
    </ConversationWrapper>
  );
};

export default Conversation;
