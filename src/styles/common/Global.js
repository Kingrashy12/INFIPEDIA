import styled from "@emotion/styled";

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 7px;

  @media screen and (max-width: 700px) {
    display: ${({ hideOnMobile }) => (hideOnMobile ? "none" : "flex")};
  }
`;

const SpaceEvenly = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  gap: 2rem;
`;

export { FlexBetween, SpaceEvenly };
