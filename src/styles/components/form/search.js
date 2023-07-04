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

export { StyledSearchForm, StyledSearchFormInput };
