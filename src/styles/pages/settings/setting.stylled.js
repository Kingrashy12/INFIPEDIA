import styled from "styled-components";

const StyledSetting = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 5px;
  position: relative;

  /* @media (max-width: 700px) {
    flex-direction: column;
  } */
`;

const StyledSetFeed = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-top: 3rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    padding: 0;
    margin-top: 4rem;
  }
  @media (max-width: 800px) {
    padding: 0;
    margin-top: 4.5rem;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    padding: 0;
    margin-top: 2rem;
    flex-direction: column;
  }
`;

const StyledItemWrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 85vh;
  /* padding: 1rem; */
  border-radius: 5px;
  overflow-y: auto;
  position: relative;

  @media (max-width: 800px) {
    display: ${({ hidden }) => hidden && "none"};
    height: 94vh;
  }
  @media (max-width: 700px) {
    display: ${({ hidden }) => hidden && "none"};
    height: 90vh;
  }
`;

const ClickActionWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  svg {
    display: ${({ show }) => (show ? "block" : "none")};
  }

  @media (max-width: 800px) {
    svg {
      display: block;
    }
  }
  @media (max-width: 700px) {
    svg {
      display: block;
    }
    h1 {
      font-size: 24px;
    }
  }
`;

const DangerZoneContainer = styled.div`
  color: rgb(220 38 38);
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 25px;
`;

export {
  StyledSetting,
  StyledSetFeed,
  StyledItemWrapper,
  ClickActionWrapp,
  DangerZoneContainer,
};
