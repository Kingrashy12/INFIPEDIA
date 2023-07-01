import styled from "styled-components";

const StyledProfile = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 3rem;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.tab}) {
    gap: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: auto;
  }
`;

export { StyledProfile };
