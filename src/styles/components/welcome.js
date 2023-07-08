import styled from "styled-components";

const StyledWelcome = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export { StyledWelcome };
