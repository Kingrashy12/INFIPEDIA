import styled from "styled-components";

const StyledPostWrapper = styled.div`
  width: 100%;
  /* @media (max-width: ${({ theme }) => theme.tab}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.Minitab}) {
    width: 95%;
    margin-right: 2rem;
  } */
  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
    margin-right: 0;
    padding-bottom: 4rem;
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

export { StyledPostWrapper, StyledPostItemContainer, PostItemWrapper };
