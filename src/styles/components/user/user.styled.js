import styled from "styled-components";

const StyledUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 3px;
  margin-top: 3rem;
  height: auto;

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
  @media screen and (max-width: 700px) {
    margin-top: 3rem;
    padding: 0;
  }
`;

const StyledUserCover = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #000;

  @media screen and (max-width: 700px) {
    height: 14rem;
  }
`;

const StyledUserProfile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border: 2px solid #000;
  position: absolute;
  bottom: -3rem;
  left: 4rem;

  @media screen and (max-width: 700px) {
    width: 100px;
    left: 2rem;
    height: 100px;
    border: 1px solid #000;
    border-radius: 50px;
  }
`;
const StyledBio = styled.div`
  position: relative;
  margin-top: 2rem;
  padding: 1rem;
  gap: 5px;

  @media (max-width: 700px) {
    padding: 5px;
    margin-top: 3rem;

    .bio {
      font-size: 15px;
      padding-left: 3px;
      padding-right: 3px;
    }

    h2 {
      font-size: 23px;
    }
    p:first {
      display: none;
    }
    /* 
    button {
      font-size: 12px;
      width: 50px;
      height: 35px;
    } */
    .username {
      font-size: 15px;
    }
    .joined {
      font-size: 14px;
    }
  }
`;

const StyledBioHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 18px;
    }
  }
`;

const StyledHero = styled.div`
  padding: 2rem;

  @media (max-width: 700px) {
    padding: 5px;
  }
`;

const FlexChild = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: center;
  padding: 3rem;
  height: auto;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
    margin-left: 0;
  }
  @media screen and (max-width: 700px) {
    padding: 1px;
    background: none;
  }
`;

const HeroCoverCamera = styled.div`
  position: absolute;
  display: flex;
  gap: 12px;
  right: 10px;
  top: -6rem;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    align-items: center;
    padding: 3px;
    border-radius: 4px;
    svg {
      width: 18px;
    }
    p {
      font-size: 15px;
    }
  }
`;

const HeroProfileCamera = styled.div`
  position: relative;

  @media screen and (max-width: 700px) {
    svg {
      width: 31px;
      padding: 5px;
      border-radius: 9999px;
      height: 31px;
      left: 6rem;
    }
  }
`;

const ProfileModelStyle = styled.div`
  width: 20%;
  background: #fff;
  position: relative;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
export {
  StyledUserCover,
  StyledUserProfile,
  StyledHero,
  StyledUserWrapper,
  StyledBio,
  FlexChild,
  FilterContainer,
  HeroCoverCamera,
  HeroProfileCamera,
  ProfileModelStyle,
  StyledBioHeader,
};
