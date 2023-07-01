import styled from "styled-components";

const StyledTagFilter = styled.nav`
  @media (max-width: ${({ theme }) => theme.tab}) {
    width: 4rem;
  }
`;

const StyledTagFilterContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.tab}) {
    width: 4.1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
export { StyledTagFilter, StyledTagFilterContainer };
