import React, { useEffect, useState } from "react";
import { getUserMessages } from "../../../hooks/getUserById";
import { Libography, Span } from "../../../libs";
import {
  MessageItem,
  StyledMessage,
} from "../../../styles/components/chats/chatboxContainer.styled";
import { Link } from "react-router-dom";

const MessageFeed = ({
  chatId,
  currentUserId,
  messages,
  setMessages,
  photo,
  scroll,
}) => {
  const [props] = useState(null);
  return (
    <StyledMessage>
      {messages.map((message, index) => {
        const createdAt = new Date(message?.createdAt);

        const formattedTime = createdAt.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <div
            // ref={scroll}
            key={index}
            className={
              message?.senderId === currentUserId
                ? "message-own"
                : "message relative"
            }
          >
            <MessageItem ref={scroll}>
              {message?.textImg && (
                <img
                  src={message.textImg?.url}
                  className="w-full rounded-[10px]"
                  alt=""
                />
              )}

              <Span text={message?.text} fontSofia />
              <Link
                target="_blank"
                to={message?.url}
                className="text-xs hover:underline hover:text-red-600 font-sofia overflow-x-hidden text-blue-500"
              >
                {message?.url}
              </Link>
              <Libography
                text={formattedTime}
                fontSofia
                className="text-neutral-500"
              />
            </MessageItem>
          </div>
        );
      })}
    </StyledMessage>
  );
};

export default MessageFeed;
