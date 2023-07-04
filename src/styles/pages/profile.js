import styled from "styled-components";

const StyledProfile = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.tab}) {
    gap: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: auto;
  }
`;

export { StyledProfile };
