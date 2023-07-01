import styled from "styled-components";

const StyledVideo = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  /* grid-template-columns: 18rem auto 18rem; */
  justify-content: space-between;
  height: 100%;
  gap: 6rem;

  @media (max-width: ${({ theme }) => theme.tab}) {
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.Minitab}) {
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: auto;
  }
`;

export { StyledVideo };
