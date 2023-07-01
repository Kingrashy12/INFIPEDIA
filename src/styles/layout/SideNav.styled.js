import styled from "styled-components";

const StyledSideNavI = styled.nav`
  /* width: 23rem; */
  z-index: 0;
  @media (max-width: ${({ theme }) => theme.tab}) {
    width: 4rem;
  }
`;
const StyledSideNavIWrapp = styled.nav`
  @media (max-width: ${({ theme }) => theme.tab}) {
    width: 4.1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
const StyledRightSideNavWrapp = styled.nav`
  width: 28rem;
  height: 100%;
  position: relative;
  @media (max-width: ${({ theme }) => theme.tab}) {
    width: 20rem;
  }
  @media (max-width: ${({ theme }) => theme.Minitab}) {
    display: none;
  }
`;
const StyledRightSideNavWrappI = styled.nav`
  width: 28rem;
  height: 100%;
  position: relative;
  @media (max-width: ${({ theme }) => theme.tab}) {
    width: 23rem;
  }
  @media (max-width: ${({ theme }) => theme.Minitab}) {
    display: none;
  }
`;

const SideUserImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

export {
  StyledSideNavI,
  StyledSideNavIWrapp,
  StyledRightSideNavWrapp,
  SideUserImage,
  StyledRightSideNavWrappI,
};
