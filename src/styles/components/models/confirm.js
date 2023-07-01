import styled from "styled-components";

const StyledConfirm = styled.div`
  background: #fff;
  width: 30%;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const ConfirmInput = styled.input`
  width: 100%;
  padding: 9px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-weight: 600;
  background: rgb(203 213 225);

  ::placeholder {
    color: #000;
  }
`;

export { StyledConfirm, ConfirmInput };
