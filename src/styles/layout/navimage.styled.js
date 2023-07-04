import styled from "styled-components";

const StyledNavImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

const FlexBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledMobileNav = styled.nav`
  width: 270px;
  background: #fff;
  position: fixed;
  right: 0;
  display: none;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  z-index: 99;
  top: 0;
  padding: 12px;
  transition: 0.55s;

  @media screen and (max-width: 700px) {
    display: flex;
  }
`;

const MobileNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export { StyledNavImage, StyledMobileNav, MobileNavWrapper, FlexBox };
