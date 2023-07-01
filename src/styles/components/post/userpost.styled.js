import styled from "styled-components";

const StyledUserPostFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;

const UserPostWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12;
  margin-top: 10px;

  @media (max-width: 700px) {
    gap: 0;
  }
`;

const PostFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  /* padding: 10px; */
  border-radius: 8px;

  @media screen and (max-width: 700px) {
    border-radius: 0;
  }
`;

const FilterDivider = styled.div`
  border-bottom: 1px solid gray;
`;

const UserPostItemContainer = styled.div`
  width: 500px;
  background: #fff;
  border-radius: 9px;

  @media screen and (max-width: 700px) {
    width: 100%;
    border-radius: 0;
  }
`;

export {
  StyledUserPostFeedContainer,
  PostFilterContainer,
  FilterDivider,
  UserPostItemContainer,
  UserPostWrapp,
};
