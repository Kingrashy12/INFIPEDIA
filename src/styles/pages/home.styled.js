import styled from "styled-components";

const StyledHome = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.tab}) {
    justify-content: flex-start;
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.Minitab}) {
    justify-content: flex-start;
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: auto;
  }
`;

export { StyledHome };
