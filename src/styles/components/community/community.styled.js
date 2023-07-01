import styled from "styled-components";

const StyledCommunityFeed = styled.section`
  width: 100%;
  /* padding: 1rem; */
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  z-index: 0;
`;

const CommunitySearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(30 41 59);
  padding: 8px;
  border-radius: 5px;
  width: 30rem;
`;

const CommunitysearchInput = styled.input`
  width: 90%;
  padding: 6px;
  border-radius: 5px;
  outline: none;
  background: transparent;
`;

export { StyledCommunityFeed, CommunitySearchWrapper, CommunitysearchInput };
