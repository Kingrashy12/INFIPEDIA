import styled from "styled-components";
import { colorvalue } from "../../colors/color";

const ConversationWrapper = styled.div`
  width: 30rem;
  position: relative;
  overflow-y: auto;
  height: 100vh;
  display: flex;
  margin-left: 1.2rem;
  background: #fff;
  padding: 2rem;

  @media screen and (max-width: 1024px) {
    width: 10rem;
  }
  @media screen and (max-width: 800px) {
    width: 5rem;
    padding: 5px;
    margin-left: 1rem;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 95vh;
    margin-left: 0;
    display: ${({ hide }) => (hide ? "none" : "block")};
  }
`;

const ConversationConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 4rem;
  margin-left: 0;
  gap: 12px;
  height: auto;

  @media screen and (max-width: 1024px) {
    margin-left: 0;

    h1 {
      display: none;
    }
    h2 {
      display: block;
    }
  }
  @media screen and (max-width: 800px) {
    overflow-x: hidden;
    h1 {
      display: none;
    }
    h2 {
      display: block;
    }
  }
  @media screen and (max-width: 700px) {
    margin-left: 0;
    padding: 1rem;
    margin-top: 2.5rem;
    height: auto;
    h1 {
      display: block;
    }
    h1 {
      display: none;
    }
  }
`;

const ConversationStyledItem = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  cursor: pointer;
  align-items: center;

  @media screen and (max-width: 1024px) {
    h2 {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    h2 {
      display: block;
    }
  }
`;

const OnlineDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background: greenyellow;
  animation: grow 2s infinite linear;
  transition: 1s ease-in linear all;
  position: absolute;
  top: 1rem;
  left: 4rem;

  @media screen and (max-width: 1024px) {
    left: 2.8rem;
    top: 0.5rem;
  }
`;
const OfflineDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background: grey;
  position: absolute;
  top: 1rem;
  left: 4rem;

  @media screen and (max-width: 1024px) {
    left: 2.8rem;
    top: 0.5rem;
  }
`;

export {
  ConversationWrapper,
  ConversationConatiner,
  ConversationStyledItem,
  OnlineDot,
  OfflineDot,
};
