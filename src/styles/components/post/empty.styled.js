import styled from "styled-components";

const StyledEmptyBuk = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.5rem;
  }

  svg {
    font-size: 6rem;
  }

  @media screen and (max-width: 700px) {
    svg {
      font-size: 3rem;
    }
    p {
      padding: 8px;
    }
  }
`;

export { StyledEmptyBuk };
