import styled from "styled-components";

const StyledHomeContent = styled.div`
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

const StyledTypeFilter = styled.nav`
  position: fixed;
  padding-top: 1rem;
  background: rgba(255, 255, 255, 0.6);
  z-index: 99;
  top: ${({ scroll }) => (scroll === "down" ? "-10px" : "4rem")};
  display: flex;
  transition: all 1s ease-in-out;
  width: 40rem;
  flex-direction: column;

  h1 {
    font-size: 1.4rem;
    padding-left: 8px;
    padding-bottom: 8px;
  }

  @media screen and (max-width: 1024px) {
    width: 35rem;
  }
  @media screen and (max-width: 800px) {
    width: 41rem;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    top: ${({ scroll }) => (scroll === "down" ? "-30px" : "2rem")};

    h1 {
      font-size: 1.2rem;
    }
  }
`;

const StyledTypeLinks = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  p {
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    width: 100%;
    :hover {
      background-color: rgb(226 232 240);
    }
  }

  @media screen and (max-width: 340px) {
    .minHide {
      text-overflow: ellipsis;
    }
  }
`;

export { StyledHomeContent, StyledTypeFilter, StyledTypeLinks };
