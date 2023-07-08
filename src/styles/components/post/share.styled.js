import styled from "styled-components";

const StyledShare = styled.div`
  display: none;
  position: fixed;
  right: 1rem;
  bottom: 9rem;

  @media screen and (max-width: 700px) {
    display: flex;
  }
`;

const StyledShareCircle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: relative;
  color: #fff;
`;
const StyledLoginCircle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: relative;
  color: #fff;
`;

export { StyledShare, StyledShareCircle, StyledLoginCircle };
