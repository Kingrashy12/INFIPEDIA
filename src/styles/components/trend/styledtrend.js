import styled from "styled-components";

const StyledTrendContent = styled.div`
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

const StyledTrendFilter = styled.nav`
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
    top: ${({ scroll }) => (scroll === "down" ? "-5px" : "2rem")};
    padding-top: 0.7rem;

    h1 {
      font-size: 1.2rem;
      padding-bottom: 0;
    }
  }
`;

const StyledTrendLinks = styled.div`
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

  @media screen and (max-width: 700px) {
    p {
      padding: 0.8rem;
    }
  }
  @media screen and (max-width: 340px) {
    .minHide {
      text-overflow: ellipsis;
    }
  }
`;

const TrendItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
  margin-top: 5rem;

  @media screen and (max-width: 700px) {
    gap: 1px;
    margin-top: 4.5rem;
  }
`;

const StyledVtrendContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  .video {
    width: 100%;
    height: 400px;
    background: #000;
    border-radius: 10px;
    cursor: pointer;

    @media screen and (max-width: 700px) {
      height: 300px;
      border-radius: 0;
    }
  }
`;

const StyledVtrendUserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
`;

const StyledVtrendDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  gap: 1rem;
`;

export {
  StyledTrendContent,
  StyledTrendFilter,
  StyledTrendLinks,
  TrendItemWrapper,
  StyledVtrendContainer,
  StyledVtrendUserImg,
  StyledVtrendDetails,
};
