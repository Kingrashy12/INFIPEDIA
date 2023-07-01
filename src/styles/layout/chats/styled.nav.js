import styled from "@emotion/styled";
import { colorvalue } from "../../colors/color";

const ChatNavWrapper = styled.nav`
  width: 4.1rem;
  padding: 0;
  height: 100%;
  position: relative;
  margin-top: -5rem;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const ChatNavContainer = styled.nav`
  position: fixed;
  width: 4.1rem;
  left: 0;
  background: #fff;
  height: 100%;
  border-right: 1px solid ${colorvalue.borderColor};
  margin-top: 9.1rem;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export { ChatNavWrapper, ChatNavContainer };
