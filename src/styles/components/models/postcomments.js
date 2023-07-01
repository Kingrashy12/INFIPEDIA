import styled from "styled-components";

const StyledPComments = styled.div`
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

const CommentsFormWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 5px;
  width: 100%;
`;

const CommentsInput = styled.input`
  padding: 8px;
  width: 70%;
  border-radius: 5px;
  position: relative;

  @media screen and (max-width: 700px) {
    width: 60%;
    border-radius: 4px;
  }
  @media screen and (max-width: 360px) {
    width: 50%;
    height: 20px;
    border-radius: 4px;
  }
  @media screen and (max-width: 350px) {
    width: 35%;
    height: 17px;
    border-radius: 4px;
  }
`;

const CommentsAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const CommentsWrapper = styled.div`
  position: relative;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const FixedComments = styled.div`
  background: #000;
  border-top: 1px solid rgb(115 115 115);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 10px;

  @media screen and (max-width: 1024px) {
    width: 60%;
    bottom: 17.8rem;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
    bottom: 17.5rem;
  }
  @media screen and (max-width: 700px) {
    width: 95%;
    bottom: 10rem;
  }
`;

export {
  StyledPComments,
  CommentsFormWrapper,
  CommentsInput,
  CommentsAvatar,
  CommentsWrapper,
  FixedComments,
};
