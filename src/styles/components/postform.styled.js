import styled from "styled-components";

const FormInput = styled.input`
  height: 40px;
  width: 90%;
  @media screen and (max-width: 700px) {
    height: 40px;
    border-radius: 5px;
    width: 300px;
  }
`;

const StyledPost = styled.div`
  background-color: #fff;
  padding: 12px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  position: relative;
  svg {
    font-size: 25px;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export { FormInput, StyledPost };
