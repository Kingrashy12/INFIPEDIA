import styled from "styled-components";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
  padding: 2rem;
  width: 100%;
  height: auto;

  @media screen and (max-width: 700px) {
    padding: 8px;
    margin-top: 3rem;
  }
`;

export { ContentWrapper };
