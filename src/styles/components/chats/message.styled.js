import styled from "styled-components";

const MessageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 700px) {
    margin-top: 1rem;
    padding: 5px;
  }
`;

const MessageImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const SingMessageWrap = styled.div`
  display: flex;
  position: relative;
  gap: 6px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const MessageText = styled.div`
  width: 300px;
  background: linear-gradient(98.63deg, #f99827 0%, #f95f35 100%);
  padding: 1rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    width: 200px;
  }
`;
const RecieveMessageText = styled.div`
  width: 300px;
  background: linear-gradient(98.63deg, #f99827 0%, #f95f35 100%);
  padding: 1rem;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    width: 200px;
  }
`;

export {
  MessageWrapper,
  MessageImage,
  SingMessageWrap,
  MessageText,
  RecieveMessageText,
};
