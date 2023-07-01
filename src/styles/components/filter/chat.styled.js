import styled from "styled-components";

const StyledChatSearchWrap = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 700px) {
    display: flex;
  }
`;
const StyledChatSearch = styled.input`
  width: 100%;
  padding: 7px;
  font-weight: 500;
  outline: none;
  background-color: rgb(203 213 225);
  color: #000;
  border-radius: 5px;

  ::placeholder {
    color: #000;
  }
`;

export { StyledChatSearch, StyledChatSearchWrap };
