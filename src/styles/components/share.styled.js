import styled from "styled-components";

const StyledShare = styled.div`
  position: relative;
  display: none;
  z-index: 90;
  padding: 0;

  span {
    z-index: 92;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export { StyledShare };
