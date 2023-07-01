import styled from "@emotion/styled";

const PlayWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  /* grid-template-columns: 18rem auto; */
  /* justify-content: space-between; */
  height: 100%;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.tab}) {
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: auto;
  }
`;

export { PlayWrapper };
