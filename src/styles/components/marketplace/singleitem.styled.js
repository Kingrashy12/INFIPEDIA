import styled from "styled-components";

const SingleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  width: 200px;
  height: auto;
  padding: 10px;
  position: relative;

  @media screen and (max-width: 700px) {
    width: 185px;
  }
  @media screen and (max-width: 380px) {
    width: 170px;
  }
  @media screen and (max-width: 350px) {
    width: 160px;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 5px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
`;

export { SingleWrapper, ItemImage, ItemDetails };
