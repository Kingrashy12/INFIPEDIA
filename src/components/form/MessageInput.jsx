import React from "react";
import { StyledMessageInput } from "../../styles/components/chats/chatbox.styled";

const MessageInput = ({ value, onChange }) => {
  return (
    <StyledMessageInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Type Message"
      className="font-sofia"
    />
  );
};

export default MessageInput;
