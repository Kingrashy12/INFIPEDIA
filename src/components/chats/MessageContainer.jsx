import React from "react";
import {
  MessageImage,
  MessageText,
  MessageWrapper,
  RecieveMessageText,
  SingMessageWrap,
} from "../../styles/components/chats/message.styled";
import { Libography, Span } from "../../libs";
import { IoCheckmarkDone } from "react-icons/io5";

const MessageContainer = ({ chat }) => {
  return (
    <MessageWrapper>
      {chat?.chats.map((c, index) => (
        <>
          <SingMessageWrap key={index}>
            {c.SendProfile ? <MessageImage src={c?.SendProfile} /> : ""}
            {c.msg ? (
              <MessageText key={index}>
                <Libography
                  fontSemiBold
                  fontSofia
                  text={c.msg}
                  className="text-base"
                />

                <Span
                  fontSemiBold
                  fontSofia
                  text="7:39 AM"
                  className="text-xs text-neutral-700 self-end"
                />
              </MessageText>
            ) : (
              ""
            )}
          </SingMessageWrap>
          <SingMessageWrap key={index}>
            {c.RProfile ? <MessageImage src={c?.RProfile} /> : ""}
            {c.rmsg ? (
              <RecieveMessageText key={index}>
                <Libography
                  fontSemiBold
                  fontSofia
                  text={c.rmsg}
                  className="text-base text-white"
                />
                <div className="flex gap-1 self-end items-center">
                  <Span
                    fontSemiBold
                    fontSofia
                    text="7:39 AM"
                    className="text-xs text-neutral-700"
                  />
                  <IoCheckmarkDone className="text-neutral-700" />
                </div>
              </RecieveMessageText>
            ) : (
              ""
            )}
          </SingMessageWrap>
        </>
      ))}
    </MessageWrapper>
  );
};

export default MessageContainer;
