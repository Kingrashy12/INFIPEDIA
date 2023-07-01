import styled from "styled-components";
import { colorvalue } from "../../colors/color";

const ChatBoxWrapper = styled.div`
  background: #fff;
  margin-top: 4.5rem;
  height: 90vh;
  width: 100%;
  border-left: 1px solid ${colorvalue.borderColor};
  justify-content: center;
  display: flex;
  position: relative;
  .svg {
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 1rem;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: 1rem;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
    height: 90vh;
    display: ${({ chat }) => (chat ? "flex" : "none")};
    .svg {
      font-size: 1.2rem;
      cursor: pointer;
      display: flex;
    }
  }
`;

const StyledMessageInput = styled.input`
  width: 100%;
  padding: 6px;
  outline: none;
  border-radius: 7px;
  /* font-weight: 500; */
`;

export { ChatBoxWrapper, StyledMessageInput };
