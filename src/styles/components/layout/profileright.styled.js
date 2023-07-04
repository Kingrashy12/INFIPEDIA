import styled from "styled-components";

const StyledProfileRight = styled.div`
  position: relative;
  width: 28rem;
  background: #fff;
  padding: 1rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const StyledProfileRightFixed = styled.div`
  width: 100%;
  position: fixed;
  height: 100%;
`;

export { StyledProfileRight, StyledProfileRightFixed };
