import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  transition: all 1s ease-in-out;
  top: ${({ scroll }) => (scroll === "down" ? "-1px" : "0")};

  @media screen and (max-width: 700px) {
    height: 40px;
  }
`;

export { Nav };
