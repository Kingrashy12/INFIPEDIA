import styled from "styled-components";

const StyledUserVideo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  background: #fff;
  /* padding: 1rem; */
  border-radius: 8px;

  @media screen and (max-width: 700px) {
    border-radius: 0;
  }
`;

const StyledUserVideoFilter = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  h1 {
    font-size: 1.3rem;
  }
`;

const UserVideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  position: relative;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 700px) {
    padding: 0;
    margin-top: 1rem;
    gap: 5px;
  }
`;

const UserVideoContent = styled.div`
  display: flex;
  background: #fff;
  position: relative;
  flex-direction: column;
  width: 350px;
  border-radius: 10px;

  @media screen and (max-width: 700px) {
    border-radius: 0;
    width: 100%;
  }
`;

const UserVideoContentVideo = styled.video`
  width: 100%;
  height: 200px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: #000;
  /* object-fit: cover; */
  @media screen and (max-width: 700px) {
    border-radius: 0;
  }
`;

const StyledVideoContentDetails = styled.div`
  display: flex;
  position: relative;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
`;

// const UserVideoImg = styled.img`
// width: 40px;
// height: 40px;
// border-radius: ;
// `

export {
  StyledUserVideo,
  StyledUserVideoFilter,
  UserVideoContainer,
  UserVideoContent,
  UserVideoContentVideo,
  StyledVideoContentDetails,
};
