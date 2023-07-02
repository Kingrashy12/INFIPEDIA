import styled from "styled-components";

const StyledPostImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 22.5px;

  /* @media screen and (max-width: 700px) {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  } */
`;

const StyledBodyImagePost = styled.img`
  width: 100%;
  height: ${({ height }) => height && height};
`;

export { StyledPostImage, StyledBodyImagePost };
