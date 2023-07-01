import styled from "styled-components";

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 1rem;
  width: 100%;
  height: auto;

  @media screen and (max-width: 700px) {
    margin-top: 0;
    .h1 {
      font-size: 19px;
    }
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 11rem;
  position: relative;
  overflow-y: hidden;
  border-radius: 8px;
  height: 300px;
  z-index: 0;

  @media screen and (max-width: 375px) {
    width: 10.5rem;
  }
  @media screen and (max-width: 340px) {
    width: 9rem;
  }
`;

export { StyledUser, ItemContainer };
