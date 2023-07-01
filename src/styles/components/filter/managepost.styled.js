import styled from "styled-components";

const StyledMange = styled.div`
  position: relative;
  background: #fff;
  width: 50%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 90%;
  margin-top: 4rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
    height: 55%;
    margin-top: 4rem;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    height: 90%;
    margin-top: 4rem;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    height: 90%;
    margin-top: 1rem;

    .actionFlex {
      flex-direction: column;
    }
  }
`;

const MagePostDivider = styled.div`
  border-bottom: 1px solid gray;
`;

const MangePostItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 240px;
`;

const MangePostItemImage = styled.img`
  width: 100%;
`;

const MangeItemEmptyImage = styled.div`
  width: 100%;
`;

const MangePostUser = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const SelectPostContainer = styled.div`
  border-top-right-radius: 9px;
  border-bottom-left-radius: 9px;
`;

export {
  StyledMange,
  MagePostDivider,
  MangePostItemContainer,
  MangePostItemImage,
  MangePostUser,
  MangeItemEmptyImage,
  SelectPostContainer,
};
