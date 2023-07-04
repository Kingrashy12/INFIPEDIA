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

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export {
  StyledComments,
  StyledButtonPlay,
  StyledLikesContainer,
  StyledVCommentsImg,
  StyledVCommentWrapper,
};
