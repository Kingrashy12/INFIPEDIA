import styled from "styled-components";

const StyledMailEdit = styled.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 30%;
  height: 40%;
  border-radius: 8px;
  /* padding: 1rem; */
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 800px) {
    width: 85%;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const StyledEditDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  width: 100%;
  gap: 1rem;
  height: 100%;
  font-family: "Sofia Sans Semi Condensed", sans-serif;
`;

export { StyledMailEdit, StyledEditDetails };
