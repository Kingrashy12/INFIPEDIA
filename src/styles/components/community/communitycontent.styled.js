import styled from "styled-components";

const StyledCommunityContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  background: #fff;
  position: relative;
  height: 35rem;
  border-radius: 5px;
  user-select: none;
  overflow-y: auto;

  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;

const StyledWelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 18px;
    }
  }
`;

const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledWelcomeImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  user-select: none;
`;

const StyledRules = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledRulesInputContainer = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  padding: 5px;
`;

const StyledFixedSearch = styled.div`
  position: fixed;
  border-radius: 11px;
  background: #fff;
  padding: 7px;
  z-index: 1;
  bottom: 6rem;
  right: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export {
  StyledCommunityContent,
  StyledWelcome,
  StyledWelcomeImage,
  StyledWelcomeContainer,
  StyledRules,
  StyledRulesInputContainer,
  StyledFixedSearch,
};
