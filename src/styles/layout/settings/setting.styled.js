import styled from "styled-components";

const StyledSettingLayout = styled.nav`
  position: relative;
  width: 600px;
  background: #fff;
  height: auto;
  border-radius: 5px;

  @media (max-width: 800px) {
    height: 93vh;
    width: 100%;
    display: ${({ hide }) => hide && "none"};
  }
  @media (max-width: 700px) {
    height: 90vh;
    display: ${({ hide }) => hide && "none"};
  }
`;

const StyledSetLinks = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export { StyledSettingLayout, StyledSetLinks };
