import styled from "styled-components";

const StyledSearchForm = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  overflow-y: auto;
`;

const StyledSearchFormInput = styled.input`
  width: 100%;
  padding: 1px;
  outline: none;
  border: none;
  background: transparent;
`;

const StyledUserResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const StyledResultUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const StyledRecentConrainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export {
  StyledSearchForm,
  StyledSearchFormInput,
  StyledUserResultContainer,
  StyledResultUserImg,
  StyledRecentConrainer,
};
