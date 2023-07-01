import styled from "styled-components";

const StyledView = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  height: auto;
  position: relative;
`;

const StyledViewCompo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  width: 100%;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    margin-top: 0;

    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
    hr {
      color: #000;
    }
  }
`;

const StyledViewPadding = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    padding: 8px;
    gap: 8px;
  }
`;

const StyledViewImage = styled.img`
  width: 100%;
  height: 40rem;

  @media screen and (max-width: 1024px) {
    height: 25rem;
  }
  @media screen and (max-width: 700px) {
    height: 20rem;
  }
`;

const StyledUserWrapper = styled.div`
  background: #fff;
  width: 600px;
  padding: 1rem;
  display: flex;
  border-radius: 9px;
  align-items: center;
  gap: 10px;
  position: relative;
  justify-content: space-between;

  h1 {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const StyledCreatedImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
export {
  StyledView,
  StyledViewImage,
  StyledViewCompo,
  StyledViewPadding,
  StyledUserWrapper,
  StyledCreatedImg,
};
