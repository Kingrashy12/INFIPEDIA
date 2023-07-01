import styled from "styled-components";

const StyledLinkNav = styled.div`
  display: flex;
  position: relative;
  gap: 12px;

  @media (max-width: 700px) {
    p {
      font-size: 14px;
    }
  }
`;

export { StyledLinkNav };
