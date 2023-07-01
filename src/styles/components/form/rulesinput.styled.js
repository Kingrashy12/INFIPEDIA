import styled from "styled-components";

const StyledRulesInputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    button {
      display: none;
    }
  }
`;
const StyledRulesInput = styled.input`
  width: 600px;
  outline: none;
  padding: 8px;
  border-radius: 6px;
  color: #000;
  font-weight: 600;

  ::placeholder {
    color: #000;
  }
`;

const StyledRulesItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const StyledRulesImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const RulesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
`;

export {
  StyledRulesInput,
  StyledRulesInputWrapper,
  StyledRulesImage,
  StyledRulesItemContainer,
  RulesTextContainer,
};
