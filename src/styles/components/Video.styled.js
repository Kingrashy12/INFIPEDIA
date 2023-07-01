import styled from "styled-components";

const StyledVideo = styled.video`
  width: 24rem;
  height: 14rem;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  cursor: pointer;
  position: relative;

  @media (max-width: ${({ theme }) => theme.Minitab}) {
    width: 19rem;
    height: 12rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 16rem;
    height: 7rem;
  }
`;

const PlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;
  flex-shrink: 1;
  width: 100%;
`;

export { StyledVideo, PlayWrapper };
