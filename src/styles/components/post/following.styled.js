import styled from "styled-components";

const StyledFollowingFeed = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    gap: 1px;
    margin-top: 6.2rem;
  }
`;

export { StyledFollowingFeed };
