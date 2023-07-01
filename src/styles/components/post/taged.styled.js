import styled from "styled-components";

const StyledTagPostWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: auto;
  margin-top: 8rem;

  @media screen and (max-width: 700px) {
    gap: 0;
  }
`;

const StyledTaggedItemCenter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

export { StyledTagPostWrapper, StyledTaggedItemCenter };
