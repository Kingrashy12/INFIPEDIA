import styled from "styled-components";

const StyledPostWrapper = styled.div`
  width: 100%;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
    margin-right: 0;
    /* padding-bottom: 2rem; */
    margin-top: 6.2rem;
  }
`;

const StyledHFormWrapper = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;

const StyledPostItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  height: auto;
  width: 100%;

  @media (max-width: 700px) {
    border-radius: 0;
    .pimage {
      height: 250px;
    }
  }
`;

const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;

  @media (max-width: 700px) {
    gap: 1px;
  }
`;

export {
  StyledPostWrapper,
  StyledPostItemContainer,
  PostItemWrapper,
  StyledHFormWrapper,
};
