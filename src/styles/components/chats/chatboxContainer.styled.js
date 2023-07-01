import styled from "styled-components";

const StyledChatBoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`;

const StyledChatBoxHeader = styled.div`
  position: fixed;
  width: 100%;
  background-color: rgb(148 163 184);
  padding: 1rem;
  align-items: center;
  display: flex;
  gap: 8px;
  z-index: 70;
  /* height: 50px; */

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const ChatImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const StyledMessage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 4rem;
  gap: 2rem;
  width: 100%;
  margin-bottom: 4rem;

  .message-own {
    align-self: flex-end;
    background: #000;
    border-radius: 10px;

    span {
      color: white;
    }
  }
  .message {
    border-radius: 10px;
    background: rgb(226 232 240);
    align-self: flex-start;

    span {
      color: #000;
      flex-wrap: wrap;
      display: flex;
      text-overflow: ellipsis;
      width: 20ch;
    }
  }
`;
const MessageItem = styled.div`
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  span {
    width: 100%;
  }

  p {
    font-size: 11px;
    align-self: flex-end;
  }
`;

const StyledSenderContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: rgb(148 163 184);
  padding: 1rem;
  align-items: center;
  display: flex;
  /* gap: 8px; */
  z-index: 70;
  bottom: 2px;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    width: 100%;
    bottom: 3rem;
  }
`;

export {
  StyledChatBoxContainer,
  StyledChatBoxHeader,
  ChatImage,
  StyledMessage,
  MessageItem,
  StyledSenderContainer,
};
