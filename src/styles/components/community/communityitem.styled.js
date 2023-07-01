import styled from "styled-components";

const StyledCLinksWrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  /* background-color: #fff; */

  p {
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    width: 100%;
    :hover {
      background-color: rgb(226 232 240);
    }
  }

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 700px) {
  }
`;

export { StyledCLinksWrapper };
