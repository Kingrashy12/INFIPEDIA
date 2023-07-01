import styled from "styled-components";

const LinkBoTagWrapp = styled.a``;

const TruncatedTextStyled = styled.p`
  position: relative;

  @media screen and (max-width: 700px) {
    p:nth-of-type(1) {
      font-size: 15px;
    }
  }
`;

export { LinkBoTagWrapp, TruncatedTextStyled };
