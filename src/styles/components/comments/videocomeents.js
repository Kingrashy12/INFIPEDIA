import styled from "styled-components";

const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 1.5rem;

  @media screen and (max-width: 1024px) {
    padding: 0.9rem;
  }
  @media screen and (max-width: 800px) {
    padding: 3px;
  }
`;

const StyledVCommentsImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const StyledVCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  position: relative;
  margin-top: 2rem;
  padding: 10px;
`;

const StyledButtonPlay = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

const StyledLikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 10rem; */
  border-radius: 9px;
  position: relative;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const StyledLikesHeader = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  padding: 1rem;
  top: 0;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
`;

const StyledLikedByContainer = styled.div`
  position: relative;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const LikedUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export {
  StyledComments,
  StyledButtonPlay,
  StyledLikesContainer,
  StyledVCommentsImg,
  StyledVCommentWrapper,
  StyledLikesHeader,
  StyledLikedByContainer,
  LikedUserImg,
};
