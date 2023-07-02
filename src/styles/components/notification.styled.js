import styled from "styled-components";

const StyledNotify = styled.div`
  width: 40%;
  position: relative;
  background: #fff;
  height: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow-y: auto;

  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;
const StyledNotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  /* overflow-y: auto; */
  padding: 2rem;
  transform: translateY(4rem);

  @media screen and (max-width: 700px) {
    padding: 1rem;
    p {
      font-size: 17px;
    }
  }
`;

const StyledNoHeader = styled.div`
  position: absolute;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  z-index: 80;
`;

export { StyledNoHeader, StyledNotify, StyledNotWrapper };
