import React from "react";
import {
  StyledChatSearch,
  StyledChatSearchWrap,
} from "../../styles/components/filter/chat.styled";

const ChatSearch = ({ text, setText }) => {
  return (
    <StyledChatSearchWrap>
      <StyledChatSearch
        placeholder="Seach Chat"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="font-roboto"
      />
    </StyledChatSearchWrap>
  );
};

export default ChatSearch;
