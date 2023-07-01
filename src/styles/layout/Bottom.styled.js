import styled from "styled-components";

const StyledBottom = styled.nav`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;

export { StyledBottom };
