import styled from "styled-components";

const StyledSaved = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  gap: 1rem;
`;
const StyledSavedFeed = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-top: 6rem;
  padding: 2rem;

  @media screen and (max-width: 700px) {
    padding: 9px;
  }
`;

const StyledSavedItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #fff;
  width: 350px;
  height: auto;
  /* height: ; */
  /* padding: 9px; */
  border-radius: 8px;
`;

const FlexItem = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 10px;

  p {
    font-size: 20px;
  }
`;

const StyledAction = styled.div`
  padding: 12px;
`;

export {
  StyledSaved,
  StyledSavedFeed,
  StyledSavedItem,
  FlexItem,
  StyledAction,
};
