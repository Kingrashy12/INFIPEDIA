import styled from "styled-components";

const SectionOneContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  align-items: center;
  :hover {
    background-color: rgb(229 229 229);
  }
`;

export { SectionOneContainer, SectionFlex };
