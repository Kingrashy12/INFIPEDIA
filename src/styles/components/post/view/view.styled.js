import styled from "styled-components";

const StyledViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-top: 5rem;
  padding: 10px;
  background: #fff;
  border-radius: 4px;

  @media screen and (max-width: 700px) {
    border-radius: 0;
    margin-top: 4rem;
  }
`;

const StyledViewUserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const StyledViewUserDeatils = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

const StyledViewPostImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 9px;
`;

export {
  StyledViewContainer,
  StyledViewUserImg,
  StyledViewUserDeatils,
  StyledViewPostImage,
};
