import styled from "styled-components";

const StyledUserFollowers = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    padding: 7px;
    button {
      font-size: 12px;
      width: 50px;
      height: 35px;
    }
  }
`;

const StyledUserFollowersItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  align-items: center;

  @media screen and (max-width: 700px) {
    p {
      font-size: 15px;
    }
  }
`;

const StyledUserFollowersImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;

  @media screen and (max-width: 700px) {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
`;

export {
  StyledUserFollowers,
  StyledUserFollowersItem,
  StyledUserFollowersImage,
};
