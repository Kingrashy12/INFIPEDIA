import React from "react";
import { ChatBoxWrapper } from "../../styles/components/chats/chatbox.styled";
import { Libography } from "../../libs";
import ChatBoxContainer from "./ChatBoxContainer";

const ChatBox = ({
  chat,
  currentUserId,
  setCurrentChat,
  setSendMessage,
  receiveMessage,
}) => {
  return (
    <ChatBoxWrapper chat={chat}>
      {!chat ? (
        <Libography
          fontSemiBold
          fontSofia
          className="text-xl text-neutral-400 flex items-center"
          text="Select a chat to start conversation"
        />
      ) : (
        <ChatBoxContainer
          chat={chat}
          currentUserId={currentUserId}
          setCurrentChat={setCurrentChat}
          setSendMessage={setSendMessage}
          receiveMessage={receiveMessage}
        />
      )}
    </ChatBoxWrapper>
  );
};

export default ChatBox;
