import styled from "styled-components";

const TaggedPostContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  height: auto;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    width: 100%;
    border-radius: 0;
  }
`;

const TaggedItemContent = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  gap: 4px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
`;

const StyledTagImg = styled.img`
  width: 100%;
  height: 20rem;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const TaggedUserContent = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  /* align-items: center; */
`;

const TaggedUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const TaggedUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const TaggedUserPost = styled.div`
  padding: 1rem;
`;

export {
  TaggedPostContainer,
  TaggedItemContent,
  StyledTagImg,
  TaggedUserContent,
  TaggedUserImg,
  TaggedUserPost,
  TaggedUserContainer,
};
