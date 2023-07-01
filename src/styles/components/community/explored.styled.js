import styled from "styled-components";

const StyledExplored = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 1rem;
  margin-top: 4rem;
  height: auto;

  @media screen and (max-width: 700px) {
    margin-top: 3rem;
    padding: 5px;
  }
`;

const ExploredCover = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #000;

  @media screen and (max-width: 700px) {
    height: 14rem;
  }
`;

const ExploredProfile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border: 2px solid #000;
  position: absolute;
  bottom: -2.5rem;
  left: 4rem;

  @media screen and (max-width: 700px) {
    width: 100px;
    left: 2rem;
    height: 100px;
    border: 1px solid #000;
    border-radius: 50px;
  }
`;

const StyledExploredBio = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;

  h1 {
    font-size: 1.3rem;
  }
`;

const StyledExSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;

  @media screen and (max-width: 700px) {
    padding: 3px;
    gap: 5px;
  }
  @media screen and (max-width: 350px) {
    padding: 1px;
    gap: 3px;
  }
`;
export {
  StyledExplored,
  ExploredCover,
  ExploredProfile,
  StyledExploredBio,
  StyledExSection,
};
