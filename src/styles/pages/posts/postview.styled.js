import styled from "styled-components";

const StyledviewWrapper = styled.div`
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
    /* grid-template-columns: auto; */
  }
`;

const StyledviewItem = styled.div`
  position: relative;
  width: 40rem;
  display: flex;
  height: auto;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    width: 35rem;
  }
  @media screen and (max-width: 800px) {
    width: 41rem;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const StyledViewHeader = styled.nav`
  position: fixed;
  padding-top: 1rem;
  background: rgba(255, 255, 255, 0.6);
  z-index: 99;
  top: ${({ scroll }) => (scroll === "down" ? "3rem" : "4rem")};
  display: flex;
  transition: all 1s ease-in-out;
  width: 40rem;
  padding: 1.5rem;

  h1 {
    font-size: 1.4rem;
    margin-left: 1rem;
  }

  @media screen and (max-width: 1024px) {
    width: 35rem;
  }
  @media screen and (max-width: 800px) {
    width: 41rem;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 1rem;
    top: ${({ scroll }) => (scroll === "down" ? "-30px" : "2rem")};

    h1 {
      font-size: 1.2rem;
    }
  }
`;

export { StyledviewWrapper, StyledviewItem, StyledViewHeader };
